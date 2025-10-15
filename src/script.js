const form = document.getElementById('signup-form');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    if (formObject['password'] === formObject['confirmPassword']) {
        passwordField.classList.remove('error');
        confirmPasswordField.classList.remove('error');
        alert("Account Created Successfully!");
    } else {
        passwordField.classList.add('error');
        confirmPasswordField.classList.add('error');
        alert("Passwords do not match!");
    }
});