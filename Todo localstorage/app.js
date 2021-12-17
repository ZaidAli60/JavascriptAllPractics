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
        const element = document.createElement("article")
        element.classList.add("todo-item")
    //    add id
        const arrt = document.createAttribute("date-id")
            arrt.value = id;
           element.setAttributeNode(arrt)
           element.innerHTML =`<p class="title">${value}</p>
           <div class="btn-container">
               <button class="edit-btn"><i class="bi bi-pencil-square"></i></button>
               <button class="delete-btn"><i class="bi bi-archive-fill"></i></button>
           </div>`
           lists.appendChild(element);
           displayAlert("Add the item", "green")
           todoContainer.classList.add("shows-container")
        } else if (value && editFlag){
        console.log("editing")
    }else{
        displayAlert("please enter your value", "danger")
    }
}

function displayAlert( text, action){
    alerts.textContent = text;
    alerts.classList.add(`alert-${action}`)

    setTimeout(function (){
        alerts.textContent = "";
        alerts.classList.remove(`alert-${action}`)
    }
    ,1000)
}

