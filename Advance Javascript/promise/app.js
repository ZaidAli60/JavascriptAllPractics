// let complete = false;
// let promis = new Promise(function (resolve,reject) {
//     if (complete) {
//         resolve();
//     }else{
//         reject();
//     }
// })

// console.log(promis);


function promis(complete) {
    // let complete = false;
 return  new Promise(function (resolve,reject) {
    setTimeout(function name(params) {
        if (complete) {
            resolve("I am sccess");
        }else{
            reject("I am failure");
        }
    },3000)
})
}

let onfulfilment = (result) =>{
    console.log(result)
}
let onRejected = (error) =>{
    console.log(error)
}

promis(false).then(onfulfilment).catch(onRejected);



// console.log(promis(false));


