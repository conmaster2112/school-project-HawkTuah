// JavaScript to toggle the password visibility
document.addEventListener('DOMContentLoaded', function () {
    const textField = document.getElementById('textField');
    const loginButton = document.getElementById('button-login');
    
    /*
    // main button
    const toggleButton = document.getElementById('button-toggle');
    const passwordField = document.getElementById('passwordField');
    toggleButton.addEventListener('click', function () {
      const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordField.setAttribute('type', type);
      if(type === "password") toggleButton.textContent = "👓";
      else toggleButton.textContent = "👀";
    });*/

    // login button
    loginButton.addEventListener('click', function () {
        location.replace("./home");
    });
    
  });