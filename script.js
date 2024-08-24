document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav__links');

  menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});

function redirectToLoginForm() {
  window.location.href = 'loginform.html';
}

// Get the login button element
const loginButton = document.getElementById('loginButton');

// Add click event listener to the button
loginButton.addEventListener('click', redirectToLoginForm);

