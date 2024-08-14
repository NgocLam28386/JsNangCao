const btnSubmit = document.querySelector('#btn-submit')

btnSubmit.addEventListener("click", function(e){
    // ngăn chặn hành vi load trang
    e.preventDefault();

    // lấy input
    const inputUserName = document.querySelector('#username')
    const inputPassword = document.querySelector('#password')

    // validate
    if(!inputUserName.value){
        alert("Không để trống username")
        inputUserName.focus();
        return;
    }

    if(!inputPassword.value){
        alert("Không để trống password");
        inputPassword.focus();
        return
    }

    if(inputPassword.value && inputPassword.value.length < 6){
        alert("Cần tối thiểu 6 kí tự");
        inputPassword.focus();
        return
    }

    // kiểm tra tài khoản và mật khẩu
    if(inputUserName.value == 'chinhpd5' && inputPassword.value == '123456'){

        alert("Đăng nhập thành công")
        
        // lưu trữ vào local storage
        localStorage.setItem("username",inputUserName.value)

        //chuyển về trang chủ
        window.location = 'index.html';

    }else{
        alert("Sai tài khoàn hoặc mật khẩu")
    }
})