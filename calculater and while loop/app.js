// var i = 0;
// while (i < 10 ){
//     console.log(i);
//     // break;
//     i++;
// }

// var i = 0;
// do{
//     console.log(i);
//     i++;
// } while(i < 10);

// let listItems =[ ];

// function getInput(){
//     const lists = document.getElementById("listItems");
//     const abc = document.getElementById("abc").value
//     document.getElementById("abc").value = " ";
//     // abc.value = "";
//     // alert(input.value) 
//     // console.log(input.value)
//     // document.write(input.value);
//     const list = document.createElement("li");
//     listItems.push(abc);

    

//     list.innerText =abc;
 
//     lists.appendChild(list);
//     // input.value = " ";
// }


function getNumber(num) {
    const result = document.getElementById("result");
    result.value += num;
}

function removeInput() {
    const result = document.getElementById("result");
    result.value = "";
}
function results() {
    const result = document.getElementById("result");
    // console.log(result.value);
    result.value = eval(result.value)
}

