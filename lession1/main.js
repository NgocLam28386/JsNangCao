//const 
//var let

// Kiểu dữ liệu
// 1. Kiểu dữ liệu nguyên thủy
/**
 * number: 1,-2,4.3
 * string: 'Lamdn', "xin chào", `abc`
 * boolean: true || false
 * null
 * undefined
 * symbol
 * bigInt
 */
//2. Kiểu dữ liệu phức tạp
/**
 * object: (obejct {}),(array [])
 */

// Toán tử:
/**
 * Toán tử số học: + - * / ** , ...
 * Toán tử gán: =, += ,-=,... vd x+=1 <=> x= x+1
 * Toán tử so sánh: == > < >= <= !=
 * Toán tử logic: && || !
 */

// biểu thức cú pháp
// if else
// switch case
// Toán tử 3 ngôi
const result = 1 < 2 ? "Đúng" : "Sai"

// vòng lặp
// while
// do whwile

// for, for in, for of, forEach
const arr = [1,2,3,4,5,6];

// push : thêm mới vào cuối mảng
// unshift: thêm mới vào đầu mảng

// pop: xóa 1 phần tử cuối mảng
// shift: xóa 1 phần tử ở đầu mảng

// slice
const newArr = arr.slice(2,4) //[3,4]
// console.log(newArr);

// splice
arr.splice(2,1,10)
// console.log(arr);


// arr.forEach((item,index)=>{
//     // console.log(item);
//     console.log(index);
// })
// for(let item of arr){
//     console.log(item);
// }

// for(let i in arr ){
//     // console.log(i);
//     console.log(arr[i]);

// }

// for(let i =0; i<arr.length; i++ ){
//     console.log(arr[i]);
// }


// DOM

// 1. Element
/**
 * id,class, tag
 * css selector
*/
// const h1Element = document.getElementById('heading'); // trả về 1 object
// console.log([h1Element]);

// const h1Elements = document.getElementsByClassName('heading-title'); //trả về 1 mảng

// const h1Elements = document.getElementsByTagName('h1') //trả về 1 mảng

const h1Element = document.querySelector('.heading-title'); // trả về 1 object
// const h1Elements = document.querySelectorAll('.heading-title')
// console.log(h1Elements);

// 2. Text
// get
console.log(h1Element.innerText);
console.log(h1Element.textContent);
// set
// h1Element.innerText = "xin chào new";
// h1Element.textContent = "Lamdn"
// h1Element.innerHTML = '<i>Lamdn</i>'


// 3. Attribute

const h1Element2 = document.querySelectorAll('.heading-title')[1];
// console.log(h1Element2);
h1Element2.id ="heading2"
h1Element2.setAttribute("data","Lamdn")

// DOM event

h1Element2.onclick = function(){
    console.log("Lamdn");
}

//add event listener