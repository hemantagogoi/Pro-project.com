const form = document.getElementById('registration-form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const errorMessage = document.getElementById('error-message');


form.addEventListener('submit', function (e) {
  e.preventDefault();

  
  errorMessage.textContent = '';

  const firstName = document.getElementById('first_name').value.trim();
  const lastName = document.getElementById('last_name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  
  if (password !== confirmPassword) {
    errorMessage.textContent = 'Passwords do not match.';
    return;
  }


  alert('Form submitted successfully!');

});
