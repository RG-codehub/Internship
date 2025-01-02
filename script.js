document.querySelector('.toggle-password').addEventListener('click', function () {
  const passwordField = document.getElementById('password');
  const isPasswordVisible = passwordField.getAttribute('type') === 'text';

  // Toggle password visibility
  passwordField.setAttribute('type', isPasswordVisible ? 'password' : 'text');

  // Update the button's icon
  this.textContent = isPasswordVisible ? '👁️' : '🙈';
});
