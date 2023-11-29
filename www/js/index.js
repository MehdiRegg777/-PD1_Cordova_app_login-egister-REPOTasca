var users = {};

function validateRegisterForm() {
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (newUsername === "" || newPassword === "" || confirmPassword === "") {
        alert("Por favor, complete todos los campos.");
    }

    if (newPassword !== confirmPassword) {
        alert("Las contraseñas no coinciden.");

    }

    users[newUsername] = newPassword;

    alert("Registrado.");
}

function validateLoginForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Por favor, complete todos los campos.");
    }

    if (users[username] === password) {
        alert("Login Correcto.");
    } else {
        alert("Usuario o contraseña incorrectos.");

    }
}