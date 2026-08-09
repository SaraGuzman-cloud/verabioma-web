
/*DATOS DEL PROTOTIPO*/

// Si no existe una cuenta, se crea una por defecto.

if (!localStorage.getItem("correoVerabioma")) {
    
    localStorage.setItem("correoVerabioma","usuario@verabioma.com");

}

if (!localStorage.getItem("passwordVerabioma")) {

    localStorage.setItem("passwordVerabioma", "123456");

}

/*CAMBIAR PANTALLAS*/

function mostrarPantalla(id) {

    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(function (pantalla) {
        pantalla.classList.remove("activa");
    });

    document.getElementById(id).classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

/*INICIAR SESIÓN*/

function iniciarSesion() {

    const correo = document.getElementById("correo").value.trim();
    const password =document.getElementById("password").value.trim();
    const correoGuardado = localStorage.getItem("correoVerabioma");
    const passwordGuardada = localStorage.getItem("passwordVerabioma");

    if (correo === "" || password === "") {
        alert("Completa todos los campos.");

        return;
    }

    if (
        correo === correoGuardado && password === passwordGuardada
    ) {
        mostrarPantalla("bienvenida");
    } else {
        alert("Correo o contraseña incorrectos.");
    }

}

/*CONTINUAR CON GOOGLE*/

function continuarGoogle() {

    alert("Inicio de sesión con Google (Modo prototipo)");

    mostrarPantalla("bienvenida");

}

/*REGISTRO*/

function registrarUsuario() {

    const nombre = document.getElementById("nombreRegistro").value.trim();
    const correo = document.getElementById("correoRegistro").value.trim();
    const password = document.getElementById("passwordRegistro").value.trim();

    const confirmar = document.getElementById("confirmarRegistro").value.trim();

    if (
        nombre === "" ||
        correo === "" ||
        password === "" ||
        confirmar === ""
    ) {
        alert("Completa todos los campos.");

        return;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener mínimo 6 caracteres.");

        return;
    }

    if (password !== confirmar) {
        alert("Las contraseñas no coinciden.");

        return;
    }

    localStorage.setItem("correoVerabioma",correo);
    localStorage.setItem("passwordVerabioma",password);

    alert("Cuenta creada correctamente.");

    document.getElementById("correo").value = correo;
    document.getElementById("password").value = "";

    mostrarPantalla("login");
}

/*ENVIAR CÓDIGO*/

function enviarCodigo() {

    const correo = document.getElementById("correoRecuperacion").value.trim();

    if (correo === "") {
        alert("Ingresa un correo electrónico.");

        return;
    }

    alert("Código enviado correctamente.\n\n" + "Para este prototipo utiliza:\n\n12345");

    mostrarPantalla("verificacion");
}

/*VERIFICAR CÓDIGO*/

function verificarCodigo() {

    const codigo = document.getElementById("c1").value +
                document.getElementById("c2").value +
                document.getElementById("c3").value +
                document.getElementById("c4").value +
                document.getElementById("c5").value;

    if (codigo === "12345") {
        mostrarPantalla("nuevaPassword");
    } else {
        alert("Código incorrecto.");
    }
}

/*CAMBIAR CONTRASEÑA*/

function guardarPassword() {

    const nueva = document.getElementById("nueva").value.trim();
    const confirmar =document.getElementById("confirmar").value.trim();

    if (
        nueva === "" || confirmar === ""
    ) {
        alert("Completa todos los campos.");

        return;
    }

    if (nueva.length < 6) {
        alert("La contraseña debe tener mínimo 6 caracteres.");

        return;
    }

    if (nueva !== confirmar) {
        alert("Las contraseñas no coinciden.");

        return;
    }

    localStorage.setItem("passwordVerabioma",nueva);

    alert("Contraseña actualizada correctamente.");

    document.getElementById("correo").value = localStorage.getItem("correoVerabioma");
    document.getElementById("password").value = "";

    mostrarPantalla("login");
}

/*ENTRAR AL SISTEMA*/

function entrarSistema() {
    alert("Aquí comenzará el sistema principal de Verabioma.");
}

/*CÓDIGO DE VERIFICACIÓN*/

const cajas = document.querySelectorAll(".codigo input");

cajas.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (
            input.value.length === 1 && index < cajas.length - 1
        ) {
            cajas[index + 1].focus();
        }
    });
});

/*GOOGLE*/

function seleccionarCuenta(nombre,correo){

    localStorage.setItem("nombreGoogle",nombre);
    localStorage.setItem("correoGoogle",correo);

    setTimeout(function(){
        document.getElementById("mensajeBienvenida").innerHTML = "¡Bienvenido " + nombre + "!";

        mostrarPantalla("bienvenida");
    },1000);
}

function usarOtraCuenta() {

    const correo = document.getElementById("correoGoogle").value.trim();

    if (correo == "") {
        alert("Ingresa un correo.");

        return;
    }

    const nombre = correo.split("@")[0];

    localStorage.setItem("nombreGoogle", nombre);
    localStorage.setItem("correoGoogle", correo);


    document.getElementById("mensajeBienvenida").innerHTML = "¡Bienvenido " + nombre + "!";

    mostrarPantalla("bienvenida");
}

function entrarSistema(){

    const nombre = localStorage.getItem("nombreGoogle");

    if(nombre){
        document.getElementById("mensajeBienvenida").innerHTML = "Bienvenido "+nombre;
    }
}

// ============================================================
// LÓGICA DE AUTENTICACIÓN
// ============================================================

function iniciarSesion() {
    // NOTA: Captura el correo si deseas guardar el usuario en sesión
    const correoInput = document.getElementById('correo');

    // NOTA: Marcar la sesión como activa antes de pasar a la pantalla de bienvenida
    localStorage.setItem('sesionIniciada', 'true');
    mostrarPantalla('bienvenida');

    if (correoInput && correoInput.value) {
        localStorage.setItem('usuarioActivo', correoInput.value);
    }

    // NOTA: Muestra la pantalla de bienvenida dentro de index-PP.html,
    // desde la cual el usuario presionará "Entrar al sistema" para ir a index-PG.html
    mostrarPantalla('bienvenida');
}
