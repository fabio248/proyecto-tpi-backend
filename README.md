# Project Backend con NodeJS y Express
Este proyecto es un sistema de Backend para una aplicación web o móvil que utiliza NodeJS y Express como framework. Se han desarrollado diferentes entidades como usuario, cliente y pedidos, y se han implementado diferentes requisitos para cada una de ellas. Además, se ha utilizado JsonWebToken para la autentificación y se han definido diferentes roles de usuario.

## Librerías utilizadas
* Bcrypt: se utiliza para encriptar la contraseña de los usuarios al momento de registrarlos.
* Passport: se utiliza para la autentificación y autorización de los usuarios.
* Nodemailer: se utiliza para enviar correos electrónicos a los usuarios en diferentes eventos, como el registro o la recuperación de contraseña.
* Joi: se utiliza para la validación de los datos de entrada del usuario, como el correo electrónico o la contraseña.
* Sequelize: se utiliza como ORM para la gestión de la base de datos.

## Roles de usuario
* Administrador: tiene acceso a todas las acciones de los usuarios, clientes y pedidos.
* Usuario: tiene acceso a las acciones de creación, edición y eliminación de sus propios pedidos.

## Autentificación
La autentificación se lleva a cabo mediante JsonWebToken, que permite al usuario acceder a diferentes recursos de la aplicación con su token generado. Además, se utiliza Passport para la autorización y verificación de los roles de usuario.

## Entidades y requisitos
### Usuario
#### Requisitos:
* Nombre
* Correo electrónico
* Contraseña
* Rol
* Nombre
* Apellido
* Token de recuperación (opcional)
#### Acciones:
* Registro
* Login
* Recuperación de contraseña
### Cliente
#### Requisitos:
* Nombre
* Dirección
* Teléfono
* Primer y segundo nombre
* Apellidos
* Genero
#### Acciones:
* Creación
* Edición
* Eliminación
### Pedidos
#### Requisitos:
* Tipo pedido
* Id cliente: Cliente al que pertenece el pedido 
* Estado
#### Acciones:
* Creación
* Edición
* Eliminación

## Cómo utilizar el proyecto
* Clona el repositorio en tu equipo local
* Instala las dependencias necesarias utilizando el comando npm install
* Crear un archivo .env en base a las variables del archivo .env.example
* Realizar las migraciones de la base de datos co el comando npm migrations:run
* Ejectar el comando npm run dev
