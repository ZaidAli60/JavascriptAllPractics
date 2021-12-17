const forms = document.querySelector(".from-control")
const inputControl = document.getElementById("input");
const todoContainer = document.querySelector(".todo-container")
const lists = document.querySelector(".list-container")
const clearBtn = document.querySelector(".clear-btn")
const alerts = document.querySelector(".alert")

// edit options

let editElement ;
let editFlag = false;
let editID = "";

// submit for
forms.addEventListener("submit",addItem)
function addItem(e){
    e.preventDefault();
    const value = inputControl.value;
   
  
    const id = new Date().getTime().toString();
   
    if (value && !editFlag) {
        console.log("add item to list")
    } else if (value && editFlag){
        console.log("editing")
    }else{
        alerts.textContent = "Empty Value";
        alerts.classList.add("alert-dangers")
    }
}



