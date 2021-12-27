// let complete = false;
// let promis = new Promise(function (resolve,reject) {
//     if (complete) {
//         resolve();
//     }else{
//         reject();
//     }
// })

// console.log(promis);


// function promis(complete) {
//     // let complete = false;
//  return  new Promise(function (resolve,reject) {
//     setTimeout(function name(params) {
//         if (complete) {
//             resolve("I am sccess");
//         }else{
//             reject("I am failure");
//         }
//     },3000)
// })
// }

// let onfulfilment = (result) =>{
//     console.log(result)
// }
// let onRejected = (error) =>{
//     console.log(error)
// }

// promis(false).then(onfulfilment).catch(onRejected);



// console.log(promis(false));



// function myFun(complete) {
//     return new Promise(function (resolve,reject) {
//      setTimeout(function name(params) {
//         if (complete) {
//             resolve("I am resolve");
//         }else{
//             reject("l am reject ");
//         }
//      },3000)
//     })
   
// }
// let onfulfilment = (result) =>{
//     console.log(result);
// }

// let onRejected = (error) =>{
//     console.log(error);
// }

// myFun(true).then(onfulfilment).catch(onRejected);
// console.log(myFun(false))

// function myFun(complete) {
//     return new Promise(function (resolve,reject) {
//      setTimeout(function name(params) {
//         if (complete) {
//             resolve("I am resolve");
//         }else{
//             reject("l am reject ");
//         }
//      },3000)
//     })
   
// }
// let onfulfilment = function (result) {
//     console.log(result);
// }

// let onRejected = function (error) {
//     console.log(error)
// }

// myFun(false ).then(onfulfilment).catch(onRejected);



          // Promise.all
   
 

//    let a = new Promise(function (resolve,reject){
//     setTimeout(function (){
//         console.log("The first value has resolve");    
//     resolve(10);
//     },1 * 1000)
//    })       

//    let b = new Promise(function (resolve,reject){
//     setTimeout(function (){
//         console.log("The secound value has resolve");    
//     resolve(20);
//     },2 * 1000)
//    })   
    
//    let c = new Promise(function (resolve,reject){
//     setTimeout(function (){
//         console.log("The third value has resolve");    
//     resolve(30);
//     },3 * 1000)
//    })   



//     let a = new Promise((resovle, reject) =>{
//         setTimeout(() => {
//             console.log("The first value has resolve")
//             resovle(10)
//         }, 1 * 1000);
//     });
//     let b = new Promise((resovle, reject) =>{
//         setTimeout(() => {
//             console.log("The secound value has rejected")
//             reject("Fail")
//         }, 2 * 1000);
//     });

//     let c = new Promise((resovle, reject) =>{
//         setTimeout(() => {
//             console.log("The third value has resolve")
//             resovle(30)
//         }, 3 * 1000);
//     });

//     var total = 0;
//    Promise.all([a,b,c]).then((result) =>{
//   for(var i in result){
//       total += result[i]

//   }
//   console.log(`Result : ${result}`)
//   console.log(`Total : ${total}`)


// }).catch((error) =>{
//     console.log(`error : ${error}`)
// })
    
let promiseCall = function (returnData,message) {
   return function(resolve,reject){
        setTimeout(() => {
            console.log(`The ${message} value has resolve`)
            resolve(returnData)
        }, returnData * 100);
    }
}


let a = new Promise(promiseCall(10,"first"));
let b = new Promise(promiseCall(20,"secound"));
let c = new Promise(promiseCall(30,"third"));
let d = new Promise (function (resolve,reject) {
    reject("The 4th promise has rejected");
})

var total = 0;
Promise.all([a,b,c,d]).then((result) =>{
for(var i in result){
  total += result[i]

}
console.log(`Result : ${result}`)
console.log(`Total : ${total}`)


}).catch((error) =>{
console.log(`error : ${error}`)
})