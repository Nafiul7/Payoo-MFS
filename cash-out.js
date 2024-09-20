document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = document.getElementById('cashout-amount-number').value;
    const cashOutPin = document.getElementById('cashout-pin').value;
    if (cashOutPin === '1234') {
        const accountBalance = document.getElementById('account-balance').innerText;
        const cashOutAmount = parseFloat(cashOut);
        const accountBalanceNumber = parseFloat(accountBalance);
        const newBalance = accountBalanceNumber - cashOutAmount;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out! Please try again later.')
    }
    
})