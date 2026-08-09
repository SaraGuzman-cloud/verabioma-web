# 🌿 VERABIOMA

## Sistema web para la comercialización de productos naturales

Verabioma es una aplicación web desarrollada para la comercialización y promoción de productos naturales como kéfir, colágeno humano y colágeno para mascotas.

El proyecto busca ofrecer una interfaz sencilla, organizada y agradable para que los usuarios puedan conocer los productos, acceder a su cuenta y posteriormente realizar diferentes acciones dentro de la plataforma.

## 🎯 Objetivo del proyecto

Desarrollar una aplicación web para Verabioma que permita presentar y promocionar sus productos naturales, facilitando el acceso de los usuarios mediante un sistema de autenticación y proporcionando una interfaz organizada, funcional y adaptable a diferentes dispositivos.

## ✨ Funcionalidades

### 🔐 Autenticación

- Inicio de sesión mediante correo y contraseña.
- Registro de nuevos usuarios.
- Validación de campos.
- Validación de contraseña.
- Recuperación de contraseña.
- Envío de código de verificación en modo prototipo.
- Verificación mediante código.
- Cambio de contraseña.
- Inicio de sesión con Google en modo prototipo.
- Pantalla de bienvenida después del inicio de sesión.

### 🛍️ Productos

- Visualización de productos naturales.
- Presentación de ofertas.
- Información de los productos.
- Productos relacionados con salud y bienestar.
- Productos para mascotas.

### 🌱 Página principal

- Presentación de la marca Verabioma.
- Banner principal.
- Sección de productos.
- Sección de ofertas.
- Sección de recetas.
- Sección de reseñas.
- Información de contacto.
- Encabezado y pie de página integrados con la identidad visual del proyecto.

### 📱 Diseño Responsive

La aplicación está diseñada para adaptarse a diferentes tamaños de pantalla:

- Computadores de escritorio.
- Portátiles.
- Tablets.
- Dispositivos móviles.

Para lograrlo se utilizan Media Queries de CSS, permitiendo adaptar el tamaño, distribución, posición y organización de los elementos dependiendo del ancho de la pantalla.

## 🧪 Funcionalidades en modo prototipo

Algunas funcionalidades del proyecto se encuentran implementadas como prototipo para representar el funcionamiento esperado del sistema.

### Inicio de sesión con Google

El botón "Continuar con Google" simula el proceso de autenticación mediante Google.

El usuario puede:

1. Seleccionar una cuenta.
2. Seleccionar la opción "Usar otra cuenta".
3. Ingresar un correo electrónico.
4. Continuar con el proceso de inicio de sesión.
5. Visualizar la pantalla de bienvenida.

Esta funcionalidad es únicamente demostrativa y no utiliza autenticación real de Google.

### Recuperación de contraseña

El proceso de recuperación permite simular:

1. Ingreso del correo electrónico.
2. Envío del código de verificación.
3. Ingreso del código.
4. Verificación del código.
5. Creación de una nueva contraseña.
6. Confirmación de la nueva contraseña.
7. Regreso al inicio de sesión.

Para el prototipo, el código de verificación utilizado es:

12345

Los datos de usuario y contraseña utilizados durante el prototipo se almacenan mediante localStorage.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage
- Media Queries
- Font Awesome

## 📂 Estructura del proyecto

```text
PY.VERABIOMA/
│
├── index-PG.html
├── index-PP.html
│
├── CSS/
│   ├── styles-PG.css
│   └── styles-PP.css
│
├── JS/
│   ├── script-PG.js
│   └── script-PP.js
│
├── img/
│   └── Imágenes del proyecto
│
└── README.md
