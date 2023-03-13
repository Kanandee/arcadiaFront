# Proyecto Frontend Arcadia Gaming
<h3>Utilizaremos la API de Backend Arcadia Gaming para conectarnos al servidor y la base de datos de los juegos, a través de Axios </h3>

# Vistas del proyecto
![](/src/assets/paginaPrincipal.png)
![](/src/assets/panelAdmin.png)
![](/src/assets/profile.png)

```
http://localhost:3000
```

## Instalación
<h3>Para poder utilizar el proyecto tendrás que instalar Node.js y clonar el repositorio de GitHub con este comando:</h3>

```
$ git clone https://github.com/Kanandee/arcadiaFront.git
```



<h3>Para poder instalar las dependencias utilizaremos:</h3>

```
npm install
```
<h3>Para arrancar la web:</h3>

```
npm run dev
```
<h3>Acceso:</h3>

```
http://localhost:5173/
```

## Navegación y permisos
|Roles | Condición | Acceso
| ------------- | ------------- | ------------- 
| Administrador | Token | Ver lista de usuarios
| Administrador | Token | Eliminar usuario
| Usuario | Token | Ver lista de juegos
| Usuario | Token | Ver información del juego
| Usuario | Token | Comprobar el carrito
| Usuario | Token | Comprar juego
| Usuario | Token | Ver su información personal
| Público | Ninguna | Registrarse
| Público | Ninguna | Logearse
| Público | Ninguna | Bienvenida

## Errores
* Se comprueban los formularios para que el usuario introduzca un email, nombre, contraseña y tarjeta bancaria correctos.
* Se comprueba los errores 404 y 500 del backend.


## Creado con

* JavaScript - Lenguaje principal
* Node.js - Entorno de ejecución de JavaScript
* React - Framework web de JavaScript
* Redux - Almacenamiento de estados
* SCSS + Bootstrap - Estilos
