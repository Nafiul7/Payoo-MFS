document.getElementById('money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const amountNumber = document.getElementById('amount-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    
    if (pinNumber === '1234') {
        const accountBalance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(accountBalance)
        const accountBalanceNumber = parseFloat(amountNumber)
        const newBalance = balanceNumber + accountBalanceNumber;
        document.getElementById('account-balance').innerText = newBalance ;
        console.log(newBalance);
        
    }

    else{
        alert('Failed to add money! Please try again')
    }
    
})
