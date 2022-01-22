# FemhackTheGoogler

# Backend

El backend está construido con json-server y json-server-auth. Los datos son creados de manera aleatoria usando el paquete falso.js.

# Frontend

El frontend está desarrollado con el framework Angular, RxJS, y algunas bibliotecas del mismo.

# Ejecutar la aplicación

La base de datos de de prueba se generan con el siguiente npm script:

`npm run db:create`

A continuación podemos levantar el backend y el frontend haciendo uso del siguiente npm script:

`npm run femhack`

Este npm script arrancará la aplicación de lado de servidor y cliente.

# Usuarios

Existen dos usuarios operativos en la apliación

- nya@example.com / 1234
- neko@example.com / 1234

Se pueden crear usuarios a través de la página de Sign Up, teniendo en cuenta que no pueden repetirse los usuarios que ya existen.
