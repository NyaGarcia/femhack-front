# FemhackTheGoogler

# Backend

El backend está construido con json-server y json-server-auth. Los datos son creados de manera aleatoria usando el paquete falso.js.

Todo el backend está mockeado teniendo los siguientes endpoints:

- /notes
  - GET
  - POST
  - DELETE
  - PUT
- POST /login
- POST /register

## CRUD de notas

Todo el CRUD de notas tiene persistencia y está desarrollado con json-server, para la creación de la base de datos se ha creado un script en typescript que se encuentra en el diretorio scripts el cual se puede ejecutar con el npm script:

npm run db:create

Se crearán dos usuarios para acceder a la aplicación y un conjunto de notas de demostración para usar la aplicación.

## Registro de usuarios

El registro de usuarios y la autenticación de usuarios está desarrollada con el paquete json-server-auth

email and password are required in the request body :

http
POST /register
{
"email": "olivier@mail.com",
"password": "bestPassw0rd"
}

El password está encriptado usando [bcryptjs](https://github.com/dcodeIO/bcrypt.js).

La respuesta contiene el token de acceso JWT (con una expiración de una hora), y el usuario sin password. No se ha hecho uso del token para centrarnos en frontend.

http
201 Created
{
"accessToken": "xxx.xxx.xxx",
"user": {
"id": 1,
"email": "nya@example.com"
}
}

## Autenticación de usuarios

La ruta utilizada para autenticar a los usuarios es la siguiente:

- POST /login

email y password son requeridos:

http
POST /login
{
"email": "nya@example.com",
"password": "bestPassw0rd"
}

La respuesta sería la siguiente:

http
200 OK
{
"accessToken": "xxx.xxx.xxx",
"user": {
"id": 1,
"email": "nya@example.com",
"firstname": "Nya",
"lastname": "García"
}
}

# Frontend

El frontend está desarrollado con el framework Angular, RxJS, y algunas bibliotecas del mismo ( Angular Material, Toastr y FontAwesome).

La arquitectura seguida ha sido la siguiente:

- core Donde encontramos los elementos comunes a toda la aplicación.
  - interfaces
    - auth-data.interface.ts
  - services
    - auth.service.ts
    - crud.service.ts
- features Donde encontramos la aplicación ordenada por features. En nuestro caso auth y notes.
  - auth
  - notes
    - components
    - pages
    - services

Cada feature ha sido dividida entre componentes, páginas y servicios. Las páginas serán cada una de las pantallas de visualización con las que el usuario interactuará, mientras que los componentes son las pequeñas partes que componen una página y que podrán reutilizarse entre diferentes páginas. Finalmente, los servicios propios por cada una de las features

# Ejecutar la aplicación

En primer lugar instalar todas las dependencias del proyecto:

npm install

La base de datos de de prueba se generan con el siguiente npm script:

npm run db:create

A continuación podemos levantar el backend y el frontend haciendo uso del siguiente npm script:

npm run femhack

Este npm script arrancará la aplicación de lado de servidor y cliente.

# Usuarios

Existen dos usuarios operativos en la apliación

- nya@example.com / 1234
- neko@example.com / 1234

Se pueden crear usuarios a través de la página de Sign Up, teniendo en cuenta que no pueden repetirse los usuarios que ya existen.
