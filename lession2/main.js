// Declaration Function

function sayHello(name){
    return `Hello ${name}`;
}

// console.log(sayHello('chinhpd5'));

// Expression Function

const sayHello2 = function (name){
    return `Hello ${name}`
}

// console.log(sayHello2('chinhpd5'));

// Arrow Function (ES6)

const sayHello3 = (name) => {
    return `Hello ${name}`
}

// console.log(sayHello3('chinhpd6'));


// Default Parameter

var sum = (a ,b=0) => a+b;

// console.log(sum(1));

// Destructuring

var array = [1,2,3]

var [a,,c] = array

// console.log(a);
// // console.log(b);
// console.log(c);

var info = {
    name: "chinhpd5",
    age: 20,
    child: {
        name: "chinhpd6"
    }
}

var {name : parentName,age,child: {name : childName}} = info

// console.log(parentName);
// console.log(age);
// console.log(childName);

const showInfo = ( {name,child :{name:childName}} )=>{
    console.log(name);
    console.log(childName);
}

// showInfo(info);

// Rest Parameter : Phần còn lại

var array = [1,2,3,4,5];

var [a,...rest] = array

// console.log(a);
// console.log(rest);

var sum  = function(a,...restPara){
    restPara.forEach((item)=>{
        a += item;
    })
    return a
}

// console.log(sum(1,2,3,4));
// console.log(sum(1,2,3,4,4,5,6,7,8));


var info = {
    name: "chinhpd5",
    age: 20,
    child: {
        name: "chinhpd6"
    }
}

var {name, ...restObj} = info

// console.log(name);
// console.log(restObj);

// spread (...)

var arr1 =[1,2,3]
var arr2 =[4,5,6]

var newArr = [...arr1, ...arr2]

// console.log(newArr);

var obj1 ={
    name: "chinhpd5",
    age: 20
}

var obj2 ={
    name: "chinhpd6",
}

var newObj = {...obj1, ...obj2}

// console.log(newObj);


// number string boolean
// var a = 1; 
// var b = a;

// a = 2

// console.log(a); //2
// console.log(b); //1


// object array
// var a = {name: "chinhpd5"};
// var b = a; // gán vị trí nhớ

// a.name = "chinhpd6"

// console.log(a); //chinhpd6
// console.log(b); //chinhpd6

// biến tham trị || biến tham chiếu


var a = {name: "chinhpd5"};
var b = {...a}; 

a.name = "chinhpd6"

// console.log(a); //chinhpd6
// console.log(b); //chinhpd5

// Các phương thức làm việc với mảng

/**
 * forEach
 * map
 * filter
 * reduce
 * find
 * some
 * every
 * 
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
        age:20,
        gender: false,
        mark: 8
    }
]

// forEach
let trElement ='';
data.forEach((item,index)=>{
    trElement += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${item.name}</td>
            <td>${ item.gender ? "Nam" : "Nữ" }</td>
            <td>${item.age}</td>
            <td>${item.mark}</td>
        </tr>
    `
})

// console.log(trElement);

let tbodyElement = document.querySelector('tbody');

// console.log(tbodyElement);
tbodyElement.innerHTML = trElement;