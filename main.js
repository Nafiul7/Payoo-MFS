
  document.getElementById('login-btn').addEventListener('click', function(event){
  event.preventDefault();
  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin').value;
  console.log(phoneNumber,pinNumber);

  if (phoneNumber === '01855115645' && pinNumber === '1234') {
    window.location.href = '/home.html';
  }
  else{
    alert('Please input correct number or pin')
  }
})
