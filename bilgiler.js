window.addEventListener('DOMContentLoaded', (event) => {
    // localStorage'dan verileri al
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const message = localStorage.getItem('message');
    const picked = localStorage.getItem('picked');
    const selected = localStorage.getItem('selected');
    const checkedNames = JSON.parse(localStorage.getItem('checkedNames'));
  
    // Verileri sayfada göster
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayMessage').textContent = message;
    document.getElementById('displayPicked').textContent = picked;
    document.getElementById('displaySelected').textContent = selected;
    document.getElementById('displayCheckedNames').textContent = checkedNames.join(', ');
  });
  