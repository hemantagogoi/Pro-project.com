
const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');


form.addEventListener('submit', function (e) {
  e.preventDefault();

  
  errorMessage.textContent = '';

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  
  if (email === '' || password === '') {
    errorMessage.textContent = 'Please enter both email and password.';
    return;
  }

  
  if (email === 'user@example.com' && password === 'password123') {
    alert('Login successful!');
    
  } else {
    errorMessage.textContent = 'Invalid email or password.';
  }
});
