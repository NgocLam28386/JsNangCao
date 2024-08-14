const btnAdd = document.querySelector('#btn-add')
const bodyElement = document.querySelector('body')


const username = localStorage.getItem('username');
if(username){
    bodyElement.innerHTML = `<h4>Xin chào ${username}</h4>` + bodyElement.innerHTML
}

// Logout
const btnLogout = document.querySelector('#btn-logout')
btnLogout.addEventListener('click', function(){
    localStorage.removeItem('username')
    // tải lại trang
    location.reload();
})

//fetch

/**
 * lấy ra: get (mặc định)
 * thêm mới: post
 * xóa: delete
 * sửa: put
 */

// lấy danh sách sản phẩm từ db.json
const getProducts = async function(){
    const response = await fetch('http://localhost:3000/products');
    // console.log(response);
    const data = await response.json();
    console.log(data);
    showProducts(data)
}

getProducts();

// hiển thị danh sách sản phẩm
const showProducts = function(data){

    const trElements = data.map((item,index)=>{
        return `
            <tr>
                <th scope="row">${index + 1 }</th>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>
                    <button data-id="${item.id}" class="btn-delete btn btn-danger">Xóa</button>
                    <button data-id="${item.id}" class="btn-edit btn btn-warning">Sửa</button>
                </td>
            </tr>
        `
    }).join('')

    // console.log(trElements);

    const tbodyElement = document.querySelector('tbody');
    // console.log(tbodyElement);
    tbodyElement.innerHTML = trElements;

    // xóa
    // lấy danh sách các nút xóa
    const btnDeletes = document.querySelectorAll('.btn-delete')
    // console.log(btnDeletes);

    //duyệt qua mảng
    btnDeletes.forEach((item)=>{
        // console.log(item);
        
        // lấy id
        // C1:
        // const id  = item.getAttribute("data-id")

        // C2:
        const id = item.dataset.id;

        // định nghĩa sự kiện click
        item.addEventListener('click',function(){
            // console.log(id);

            if(confirm("Bạn có chắc chắn muốn xóa không?")){
                deleteProduct(id)
            }
        })
    })

    // sửa
    const btnEdits = document.querySelectorAll('.btn-edit');

    // duyệt qua mảng
    btnEdits.forEach(item=>{
        const id = item.dataset.id;
        item.addEventListener("click",function(){

            // hiển dữ liệu ra form
            loadProductById(id)
        })
    })
}

// xóa Sản phẩm
const deleteProduct = async function(id){
    try {
        const response = await fetch(`http://localhost:3000/products/${id}`,{
            method:'delete'
        })
    
        if(response.ok){
            alert("Xóa thành công")
        }else{
            alert("xóa thất bại")
        }
    } catch (error) {
        alert("Có lỗi: "+ error)
    }
}

// thêm mới
btnAdd.addEventListener('click', function(){
    // Hiển thị ra 1 form
    bodyElement.innerHTML= `
        <h1>Thêm mới sản phẩm</h1>
        <form>
            <div class="mb-3">
                <label class="form-label">Tên sản phẩm</label>
                <input type="text" class="form-control" id="name">
            </div>

            <div class="mb-3">
                <label class="form-label">Số lượng</label>
                <input type="number" class="form-control" id="quantity">
            </div>
           
            <button type="submit" id="btn-submit" class="btn btn-primary">Submit</button>
        </form>
    `

    const btnSubmit = document.querySelector('#btn-submit');
    btnSubmit.addEventListener('click', function(event){
        // ngăn chặn hành vi load trang
        event.preventDefault();

        // lấy input
        const inputName = document.querySelector('#name')
        const inputQuantity = document.querySelector('#quantity')

        // validate
        if(!inputName.value){
            alert("không để trống tên sản phẩm")
            inputName.focus();
            return;
        }

        if(!inputQuantity.value){
            alert("không để trống số lượng")
            inputQuantity.focus();
            return;
        }

        const data = {
            name: inputName.value,
            quantity: inputQuantity.value
        }

        // console.log(data);
        addProduct(data)
    })
})

// Thêm mới sản phẩm vào db.json
const addProduct = async function(data){
    const response = await fetch('http://localhost:3000/products',{
        method: 'post',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    if(response.ok){
        alert("Thêm thành công")
    }

}

// Cập nhật
const loadProductById = async function(id){
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const product = await response.json();
    // console.log(product);

    // tạo form
    bodyElement.innerHTML= `
        <h1>Cập nhật sản phẩm</h1>
        <form>
            <div class="mb-3">
                <label class="form-label">Tên sản phẩm</label>
                <input type="text" value="${product.name}" class="form-control" id="name">
            </div>

            <div class="mb-3">
                <label class="form-label">Số lượng</label>
                <input type="number" value="${product.quantity}" class="form-control" id="quantity">
            </div>
           
            <button type="submit" id="btn-submit" class="btn btn-primary">Submit</button>
        </form>
    `

    const btnSubmit = document.querySelector('#btn-submit');
    btnSubmit.addEventListener('click', function(event){
        // ngăn chặn hành vi load trang
        event.preventDefault();

        // lấy input
        const inputName = document.querySelector('#name')
        const inputQuantity = document.querySelector('#quantity')

        // validate
        if(!inputName.value){
            alert("không để trống tên sản phẩm")
            inputName.focus();
            return;
        }

        if(!inputQuantity.value){
            alert("không để trống số lượng")
            inputQuantity.focus();
            return;
        }

        const data = {
            id: product.id,
            name: inputName.value,
            quantity: inputQuantity.value
        }

        // console.log(data);
        updateProduct(data)
    })
}

// cập nhật product vào db.json
const updateProduct =async function(data){
    const response = await fetch(`http://localhost:3000/products/${data.id}`,{
        method: "put",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
    if(response.ok){
        alert("Sửa thành công")
    }else{
        alert("Sửa thất bại")
    }
}