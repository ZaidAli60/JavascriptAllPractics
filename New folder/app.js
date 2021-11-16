// for(var a =1; a < 100; a =a+10){
//     for(var b = a; b<a+10; b++){
//         document.write(b + " " );
//     }
//     document.write("<br>");
// }


// var city = prompt("Enter Your city");
// city = city.toLowerCase();

// var arr = ['faisalabad', 'lahore', 'multan'];

// for (var i = 0; i < arr.length; i++){
//     if (arr[i] === city){
//         alert('City has found')
//     }else{
//         alert('`City has not found')
//     }
// };



var city = prompt("Enter Your city");
var firstCharater = city.slice(0,1)
firstCharater = firstCharater.toUpperCase()
var otherCharater = city.slice(1)
otherCharater = city.slice(1)

var lowerUpper =firstCharater+otherCharater;
console.log(lowerUpper);

var arr = ['faisalabad', 'lahore', 'multan'];

for (var i = 0; i < arr.length; i++){
    if (arr[i] === city){
        alert('City has found')
    }else{
        alert('`City has not found')
    }
};