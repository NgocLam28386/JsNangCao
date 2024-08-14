// Xử lý bất đồng bộ trong JS

// JS là 1 ngôn đơn luồng (đồng bộ)

// setTimeOut, setInterval, call api(fetch, ajax,...), load click,... 
// -> bất đồng bộ

// console.log("Việc 1");
// console.log("Việc 2");
// console.log("Việc 3");

// chờ 1 thời gian -> thực thi nhiệm vụ trong hàm
// setTimeout(() => {
//     console.log("chinhpd5");
// }, 2000);

// console.log("Việc 1"); //1
// setTimeout(() => {
//     console.log("Việc 2"); // chờ 2s -> 2
// }, 2000);
// console.log("Việc 3"); //3

// 1 3 2 -> bất đồng bộ

// 1 2 3

// callback
// promise
// async / await

// callback: hàm gọi lại dưới dạng 1 tham số của 1 hàm khác

let seyHello = function(name){
    console.log("Hello "+ name);
}

var doing = function(callback){
    callback("chinhpd5")
}

// doing(seyHello)

var delay = function(ms,callback){
    // fake tác vụ bất đồng bộ
    setTimeout(()=>{
        const data ="Đang thực thi ..."
        callback(data)
    },ms)
}

var doing = function(){
    // việc 1
    console.log("Bắt đầu");
    delay(2000,(response)=>{
        console.log(response);
        console.log("Kết thúc");

        // việc 2
        console.log("Bắt đầu 2");
        delay(1000,(data)=>{
            console.log(data);
            console.log("Kết thúc 2");

            // việc 3
            console.log("Bắt đầu 3");
            delay(3000,(data)=>{
                console.log(data);
                console.log("Kết thúc 3");

                 // việc 4
                console.log("Bắt đầu 4");
                delay(3000,(data)=>{
                    console.log(data);
                    console.log("Kết thúc 4");
                })
            })
        })
    })
}

// doing()

//callback hell

// promise: Lời hứa

const myPromise = new Promise((resolve,reject )=>{
    const isCheck = true ; //false

    if(isCheck){
        resolve("Thành công")
    }else{
        reject("Thất bại")
    }
})

// myPromise
//     .then((data)=>{
//         console.log(data);
//         return myPromise
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
//     .finally(()=>{
//         console.log("Kết thúc");
//     })


const delay2 = function(ms){
    // fake 1 tác vụ bất đồng bộ
    return new Promise((resolve, reject)=>{
        const isCheck = true;

        setTimeout(()=>{
            if(isCheck){
                resolve("Đang thực thi ...")
            }else{
                reject("Thất bại")
            }

        },ms)

    })
}

const doing2 = function(){
    delay2(1000)
        .then((data)=>{
            //việc 1
            console.log("Bắt đầu");
            console.log(data);
            console.log("Kết thúc");
            return  delay2(1500)
        })
        .then((data)=>{
            //việc 2
            console.log("Bắt đầu 2");
            console.log(data);
            console.log("Kết thúc 2");
            return  delay2(1000)
        })
        .then((data)=>{
            //việc 3
            console.log("Bắt đầu 3");
            console.log(data);
            console.log("Kết thúc 3");
            // return  delay2(1000)
        })
        .catch(err=>{
            console.log(err);
        })
}

// doing2();


// async / await
const doing3 = async function(){
    // việc 1
    console.log("Bắt đầu");
    const data = await delay2(1000); // tác vụ bất đồng bộ
    console.log(data);
    console.log("Kết thúc");

    // việc 2
    console.log("Bắt đầu 2");
    const data1 = await delay2(1000); // tác vụ bất đồng bộ
    console.log(data1);
    console.log("Kết thúc 2");

     // việc 3
     console.log("Bắt đầu 3");
     const data2 = await delay2(1000); // tác vụ bất đồng bộ
     console.log(data1);
     console.log("Kết thúc 3");

}

// doing3();


const getDataCallback = function(callback){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            // console.log(response);
            return response.json();
        })
        .then((data)=>{
            // console.log(data);
            callback(data,null)
        })
        .catch(err=>{
            callback(null,err)
        })
}

// getDataCallback((data,error)=>{
//     if(error){
//         alert("có lỗi : " +error)
//     }else{
//         console.log(data);
//         //xử lý các tác vụ tiếp theo
//     }

// });

const getDataPromise = function(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            // console.log(response);
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            // xử lý các tác vụ tiếp theo
        })
        .catch(err=>{
            alert("Có lỗi: "+ err)
        })
}

// getDataPromise();

const getDataAsync = async function(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // console.log(response);

    const data = await response.json();
    console.log(data);

    // xử lý các tác vụ tiếp theo
}

getDataAsync();