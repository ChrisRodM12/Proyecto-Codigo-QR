document.addEventListener('DOMContentLoaded', function () {
    // Capturar el formulario
    var form = document.getElementById('entry');

    // Manejar el evento submit del formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto

        // Obtener los valores de los campos
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var termsChecked = document.getElementById('check').checked;

        // Validar la contraseña
        var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        var isPasswordValid = passwordRegex.test(password);

        // Verificar si todos los campos son válidos
        if (email && isPasswordValid && termsChecked) {
            // Crear el usuario (puedes realizar alguna acción adicional aquí)
            alert('Usuario creado correctamente');
        } else {
            // Mostrar un mensaje de error
            alert('Por favor, complete todos los campos correctamente');
        }
    });
});
function validateEmail() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var termsChecked = document.getElementById('check').checked;

    // Verifica si el campo de correo no está vacío y contiene al menos un carácter "@"
    if (email.trim() === '' || !email.includes('@')) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }

    // Verifica si los otros campos están llenos
    if (password.trim() === '' || !termsChecked) {
        alert('Por favor, complete todos los campos y acepte los términos y condiciones.');
            return false;
    }

    return true;
}
function validatePassword(password) {
    // Verifica si la contraseña cumple con los requisitos
    var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return regex.test(password);
}
function validateUser(email, password) {
    // Verifica si el usuario existe en la lista
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            return true;
        }
    }
    return false;
}
