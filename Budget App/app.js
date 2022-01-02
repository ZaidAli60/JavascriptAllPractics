class Budget {
    constructor (){
        this.feedbackAlert = document.querySelector(".aalert")
        this.budgetInput = document.getElementById("budget-input")
        this.budgetAmount = document.getElementById("budget-amount")
        this.budgetExpense = document.getElementById("expanes-amount")
        this.budgetBalance = document.getElementById("balance-amount")
        this.balance = document.getElementById("balance")
    }
    //budget form method
    submitFormBudget(){
        // console.log("submit budget form")
        const value = this.budgetInput.value;
        if (value === "" || value < 0) {
          this.feedbackAlert.classList.add("showItem");
          this.feedbackAlert.innerHTML = `<p>Empty Value</p>`
          
          setTimeout(() =>{
            this.feedbackAlert.classList.remove("showItem");
            // this.feedbackAlert.innerHTML = `<p>Empty Value</p>`
        },2000)
        }else{
            this.budgetAmount.textContent = value;
            // console.log(this.budgetAmount)
            this.budgetInput.value = "";
            this.showBalance();
        }
    }
    // show the balance
    showBalance(){
        const expense = this.totalExpense();
        const total = parseInt(this.budgetAmount.textContent) - expense;
        this.budgetBalance.textContent = total;
        // console.log(total)
    }
    totalExpense(){
        let total = 0;
        return total;
    }



}

function addEventListners(){
const budgetForm = document.getElementById("budget-form")

const budget = new Budget();

//budget form submit 
budgetForm.addEventListener("submit", function (event){
    event.preventDefault();
    budget.submitFormBudget();
})
}

document.addEventListener("DOMContentLoaded", function(){
    addEventListners()
})

