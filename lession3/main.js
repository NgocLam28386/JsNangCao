// Các phương thức làm việc với mảng

/**
 * forEach
 * find
 * some
 * every
 * map
 * filter
 * reduce
 */

const data = [
    {
        name:"chinhpd5",
        age:20,
        gender: true,
        mark: 10
    },
    {
        name:"chinhpd6",
        age:21,
        gender: false,
        mark: 9
    },
    {
        name:"chinhpd7",
        age:19,
        gender: true,
        mark: 7
    },
    {
        name:"chinhpd8",
        age:21,
        gender: false,
        mark: 8
    }
]

// find: tìm 1 PHẦN TỬ trong mảng thỏa mãn điều kiện GẦN NHẤT
// nếu thỏa mãn thì thoát khỏi vòng lặp

const findItem = data.find((item,index)=>{
    // console.log(index);
    // tìm phần tử có age bằng 21
    return item.age == 21
})

// tìm phần tử có điểm nhỏ hơn 9
const findItem2 = data.find((item) => item.mark < 9)

// console.log(findItem2);


// some : trả về giá trị boolean
// kiểm tra mảng xem có ÍT NHẤT 1 phần từ thỏa điều kiện
// nếu có thì trả về giá trị true và kết thúc vòng lặp
// nếu không có thì trả về giá trị false

const checkMark = data.some((item,index)=>{
    // console.log(index);
    // kiểm tra xem có ai điểm bằng 9
    return item.mark == 9
})

// console.log(checkMark);

// every: trả về giá trị boolean
// kiểm tra TOÀN BỘ các phần tử trong mảng có thỏa mãn điều kiện
// có 1 PHẦN TỬ không thỏa mãn -> false -> kết thúc vòng lặp
// tất cả các phần tử thỏa mãn -> true

const checkMark1 = data.every((item,index)=>{
    // console.log(index);
    return item.mark > 7
})

// console.log(checkMark1);


// filter: duyệt qua các phần tử trong mảng
// trả về 1 mảng mới thỏa mãn điều kiệu trong 'return'

const filterItems = data.filter((item,index)=>{
    return item.mark >7
})

// console.log(filterItems);

// map: duyệt qua mảng
// trả về 1 mảng mới nếu 'return'

let trElement = filterItems.map((item,index)=>{
    item = {
        ...item, //spread // giữ lại các phần tử cũ
        mark: "Điểm: "+ item.mark // ghi đè lên điểm cũ
    }
    return `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${item.name}</td>
            <td>${item.gender ? "Nam": "Nữ"}</td>
            <td>${item.age}</td>
            <td>${item.mark}</td>
        </tr>
    `
}).join('')// join chuyển 1 mảng về 1 chuỗi

// console.log(trElement);

let tbodyElement = document.querySelector('tbody');
// console.log(tbodyElement);
tbodyElement.innerHTML = trElement;

// reduce: phương thức tính toán làm việc với mảng

// nhận 2 tham số : 1. function, 2 giá trị khởi tạo
// preValue: biến lưu trữ
// item: các phần tử trong mảng qua các lần lặp
// index: vị trí của item
// array: mảng ban đầu


const total = filterItems.reduce((preValue, item,index,array)=>{
    return preValue = preValue + item.mark //0
},0)

// console.log(total);