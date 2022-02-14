//deposit
function getInputValue(inputId) {
    debugger;
    const input = document.getElementById(inputId);
    const newAmount = parseFloat(input.value);
    input.value = '';
    return newAmount;
}
function updateDepositWithdraw(totalFieldId, newAmount) {

    const Total = document.getElementById(totalFieldId)
    const previousAmount = parseFloat(Total.innerText);
    const currentTotal = newAmount + previousAmount;
    Total.innerText = currentTotal;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    return previousBalanceTotal;

}
function updateBalance(newAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        const balance = previousBalanceTotal + newAmount;
        balanceTotal.innerText = balance;
    }
    else {
        const balance = previousBalanceTotal - newAmount;
        balanceTotal.innerText = balance;
    }

}

document.getElementById('deposit-button').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updateDepositWithdraw('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateDepositWithdraw('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }

})

/*document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositInput.value);
    

    const depositTotal = document.getElementById('deposit-total')
    const previousDepositAmount = parseFloat(depositTotal.innerText);
    const currentDepositTotal = newDepositAmount + previousDepositAmount;
    depositTotal.innerText = currentDepositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const balance = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = balance;
    //clear deposit field
    depositInput.value = '';
})
// withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input')
    const newWithdrawAmount = parseFloat(withdrawInput.value);
    

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);
    const currentWithdraw = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = currentWithdraw;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const currentBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = currentBalance;
    withdrawInput.value = '';
})
*/
