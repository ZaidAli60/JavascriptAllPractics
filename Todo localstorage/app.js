const forms = document.querySelector(".from-control")
const inputControl = document.getElementById("input");
const todoContainer = document.querySelector(".todo-container")
const lists = document.querySelector(".list-container")
const clearBtn = document.querySelector(".clear-btn")
const alerts = document.querySelector(".alert")
const submitBtn = document.querySelector(".submit-btn")

// edit options

let editElement ;
let editFlag = false;
let editID = "";

// submit for
forms.addEventListener("submit",addItem)
// delete-btn
clearBtn.addEventListener("click", clearItem)



function addItem(e){
    e.preventDefault();
    const value = inputControl.value;
   
  
    const id = new Date().getTime().toString();
    // const id = "";
   
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

          const deleteBtn = element.querySelector(".delete-btn")
          const editBtn = element.querySelector(".edit-btn")
          deleteBtn.addEventListener("click" ,deleteButton )
          editBtn.addEventListener("click" ,editItems )
            
        //    set addLocalStorage
        addLocalStorage(id,value);
        // set Default value
        setBackToDefault();








        } else if (value && editFlag){
            editElement.innerHTML = value ;
            setBackToDefault()
            displayAlert("Value change" , "success")

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
        // clear the all items
        function clearItem(){
            const items = document.querySelectorAll(".todo-item")
            // console.log(items)
            if (items.length > 0) {
                items.forEach(function (item){
                    lists.removeChild(item)
                });
            }
            todoContainer.classList.remove("shows-container")
            displayAlert("Empty value", "danger");
        }
        // Delete Buttons
        function deleteButton(e){
            const element = e.currentTarget.parentElement.parentElement;
            const id = element.dataset.id;
            lists.removeChild(element)
            if (lists.children.length === 0) {
            todoContainer.classList.remove("shows-container")
                
            }
            displayAlert("Item remove", "danger");
            setBackToDefault();
        }
        // update edit
        function editItems(e){
            const element = e.currentTarget.parentElement.parentElement;
            editElement = e.currentTarget.parentElement.previousElementSibling;
            // console.log(element)
            inputControl.value = editElement.innerHTML;
            editFlag = true;
            editID = element.dataset.id;
            // console.log(editID)
            submitBtn.textContent = "edit";
       
            
        }




        // set the back Default
        function setBackToDefault() {
            inputControl.value = "";
            editFlag = false;
            editID = "";
            submitBtn.textContent = "submit";
            
        }
     


    //    setup localStorage 
    function addLocalStorage(id,value) {
        console.log("add the local storage")
    }



















