# EducaKids.github.io

Web en Desarrollo, Visite :

Proyecto : FrontEnd

https://orlandoc0107.github.io/EducKids.github.io/

Nota: La API de Disney esta fuera de Servicio : https://status.disneyapi.dev/ 

# EducAdmin
Proyecto Codo a Codo BackEnd 

Aquí se encuentra el enlace al proyecto BackEnd de EducAdmin: [http://34.125.140.52:5000/](http://34.125.140.52:5000/)

## Configuración del entorno virtual y ejecución del proyecto

Para configurar el entorno virtual y ejecutar el proyecto, sigue los siguientes pasos:

1. Crea un entorno virtual utilizando el siguiente comando:

python3 -m venv .venv


2. Activa el entorno virtual con el comando:

source .venv/bin/activate


3. Instala Flask ejecutando el siguiente comando:

pip install Flask


4. Ejecuta el proyecto con el siguiente comando:

flask run --host=0.0.0.0


Si deseas ejecutar el proyecto en modo de depuración, puedes utilizar el siguiente comando:

flask run --app index run --debug



## Métodos para recuperar datos de la base de datos

- `fetchone()`: Si esperas un gran número de filas y deseas procesarlas una a la vez para ahorrar memoria, este método es útil. Puedes realizar operaciones en la fila actual y luego pasar a la siguiente hasta que no haya más filas.

- `fetchall()`: Si el conjunto de resultados no es demasiado grande y deseas obtener todas las filas de una vez para realizar operaciones en conjunto, este método es más conveniente. Obtendrás todas las filas en una lista que puedes recorrer y procesar sin la necesidad de volver a la base de datos.

La elección entre `fetchone()` y `fetchall()` dependerá de tus necesidades específicas y del tamaño de los datos que estás recuperando.

## Módulos y funciones de Flask utilizadas

- `Flask`: Módulo principal de Flask que permite crear una aplicación web.
- `render_template`: Función de Flask que renderiza una plantilla HTML.
- `request`: Módulo de Flask para manejar las solicitudes HTTP recibidas por la aplicación.
- `redirect`: Función de Flask que redirige a una URL específica.
- `url_for`: Función de Flask que genera una URL para una vista específica.
- `flash`: Módulo de Flask para mostrar mensajes flash.
- `session`: Módulo de Flask para manejar sesiones.
- `abort`: Función de Flask que aborta una solicitud y muestra un código de estado específico.
- `jsonify`: Función de Flask que serializa una respuesta en formato JSON.

## Módulos y funciones de Flask-Login utilizadas

- `LoginManager`: Módulo de Flask-Login para gestionar la autenticación y el inicio de sesión.
- `UserMixin`: Clase de Flask-Login que proporciona métodos de utilidad para la clase de modelo de usuario.
- `login_user`: Función de Flask-Login para iniciar sesión de un usuario.
- `logout_user`: Función de Flask-Login para cerrar sesión de un usuario.
- `login_required`: Decorador de Flask-Login que especifica que una vista requiere que el usuario esté autenticado.
- `current_user`: Objeto de Flask-Login que representa al usuario actualmente autenticado.

## Funciones de hash de contraseñas

- `generate_password_hash`: Función de Werkzeug para generar un hash de contraseña.
- `check_password_hash`: Función de Werkzeug para verificar si una contraseña coincide con su hash.

## Módulo de interacción con bases de datos MySQL

- `pymysql`: Módulo de Python para interactuar con bases de datos MySQL.

## Panel de administración de MySQL

Puedes acceder al panel de administración de MySQL a través de este enlace: [https://console.clever-cloud.com/](https://console.clever-cloud.com/)

Espero que estas mejoras hayan sido útiles. Si tienes alguna otra pregunta, no dudes en preguntar.

# diferencias principales entre pymysql y sqlite3:

Bases de datos compatibles: pymysql es una biblioteca de Python que se utiliza para interactuar con bases de datos MySQL, mientras que sqlite3 es un módulo incorporado en Python que permite trabajar con bases de datos SQLite.

Tipo de base de datos: MySQL es un sistema de gestión de bases de datos relacional de uso general, adecuado para aplicaciones de mayor escala y con múltiples conexiones simultáneas. SQLite, por otro lado, es una biblioteca de base de datos incorporada en Python que proporciona una base de datos de un solo archivo y es adecuada para aplicaciones más pequeñas o de uso personal.

Conexión y configuración: pymysql requiere una conexión explícita a un servidor de bases de datos MySQL. Debes proporcionar información como el nombre de usuario, la contraseña, el host y el puerto para establecer la conexión. Por otro lado, sqlite3 trabaja directamente con archivos de bases de datos SQLite sin necesidad de una conexión de red o configuración adicional.

Sintaxis SQL: Si bien ambos módulos permiten ejecutar consultas SQL, puede haber algunas diferencias en la sintaxis SQL compatible. MySQL y SQLite tienen sus propias características y extensiones específicas, por lo que algunas consultas SQL pueden variar entre los dos sistemas.

Características y escalabilidad: MySQL es un sistema de gestión de bases de datos completo que ofrece una amplia gama de características y opciones avanzadas, como soporte para múltiples conexiones, replicación, clústeres y seguridad avanzada. SQLite, en cambio, es una base de datos de menor escala con menos características, diseñada para aplicaciones de un solo usuario o pequeñas.