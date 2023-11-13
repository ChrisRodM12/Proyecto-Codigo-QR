document.addEventListener('DOMContentLoaded', function () {
    var botonIngresar = document.querySelector('form');

    botonIngresar.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el comportamiento por defecto (enviar el formulario)

        // Obtén los valores de los campos
        var nombres = document.getElementById('nombre').value;
        var apellidos = document.getElementById('apellido').value;
        var correo = document.getElementById('correo').value;
        var fechaNacimiento = document.getElementById('nacimiento').value;
        var telefono = document.getElementById('telefono').value;

        // Verifica si al menos un campo está vacío
        if (nombres === '' || apellidos === '' || correo === '' || fechaNacimiento === '' || telefono === '') {
            alert('Por favor completa todos los campos del formulario.');
        } else {
            // Verifica si el campo de correo electrónico contiene una "@"
            if (!correo.includes('@')) {
                alert('Por favor introduce una dirección de correo electrónico válida.');
            } else {
                // Si los campos no están vacíos y el correo es válido, puedes enviar el formulario o realizar otras acciones aquí
                document.getElementById('registrationForm').submit(); // Envía el formulario
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Capturar el formulario
    var form = document.querySelector('form');

    // Manejar el evento submit del formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto

        // Validar el formulario
        if (form.checkValidity()) {
            // Obtener los valores de los campos
            var nombre = document.getElementById('nombre').value;
            var apellido = document.getElementById('apellido').value;
            var correo = document.getElementById('correo').value;
            var nacimiento = document.getElementById('nacimiento').value;
            var telefono = document.getElementById('telefono').value;

            // Crear el usuario (puedes realizar alguna acción adicional aquí)
            alert('Usuario creado correctamente');

            // Puedes redirigir al usuario a otra página, por ejemplo:
            // window.location.href = 'pagina_de_bienvenida.html';
        } else {
            // Si el formulario no es válido, mostrar un mensaje de error
            alert('Por favor, complete todos los campos correctamente');
        }
    });
});




