const total = document.getElementById("total");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const transaction = document.getElementById("transaction");

const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amt");

const addButton = document.getElementById("add-btn");

addButton.addEventListener("click", () => {
    let name = descInput.value;
    let amount = amountInput.value;
    if (name === "" || amount === "") return;
    let num = Number(amount);
    const box = document.createElement("div");
    box.innerText = name + " : ₹" + amount;
    transaction.appendChild(box);
    let total_amt = parseInt(total.innerText);
    if (num >= 0) {
        let income_amt = parseInt(income.innerText);
        income_amt = income_amt + num;
        income.innerText = income_amt.toString();
        total_amt = total_amt + num;
        total.innerText = total_amt.toString();
    }
    else {
        let expense_amt = parseInt(expense.innerText);
        expense_amt = expense_amt + num;
        expense.innerText = expense_amt.toString();
        total_amt = total_amt + num;
        total.innerText = total_amt.toString();
    }
    descInput.value = "";
    amountInput.value = "";
})