# Tienda-de-joyas desafio 5 NodeJs & Express
se crea un servidor express para un diseño avanzado de API

install code:
* npm init -y
* npm install
* npm install pg
* npm install express
* npm install dotenv --save
* npm i nodemon
* npm i cors
* npm i csb-inspector
* npm i pg-format

# Desafío - Tienda de Joyas

- Para realizar este desafío debes haber estudiado previamente todo el material disponible correspondiente a la unidad.
- Desarrollo desafío:
  - El desafío se debe desarrollar de manera grupal

## Descripción

La tienda de joyas My Precious Spa necesita cambiar su aplicación de escritorio por una moderna y dinámica. Para realizar esta tarea, contactó a un desarrollador Full Stack Developer que desarrolle la API REST de una aplicación cliente para satisfacer las necesidades puntuales de sus usuarios de una forma eficiente, mantenible y eficaz.

Deberás crear una API REST que permita:

  1. Límite de recursos
  2. Filtro de recursos por campos
  3. Paginación
  4. Ordenamiento
  5. Estructura de datos HATEOAS

Para realizar este desafío necesitarás ejecutar el siguiente script sql en tu terminal __psql__ para crear la base de datos y la tabla que utilizaremos:

```SQL
CREATE DATABASE joyas;
\c joyas;

CREATE TABLE inventario (id SERIAL, nombre VARCHAR(50), categoria VARCHAR(50), metal VARCHAR(50), precio INT, stock INT);

INSERT INTO inventario values
(DEFAULT, 'Collar Heart', 'collar', 'oro', 20000 , 2),
(DEFAULT, 'Collar History', 'collar', 'plata', 15000 , 5),
(DEFAULT, 'Aros Berry', 'aros', 'oro', 12000 , 10),
(DEFAULT, 'Aros Hook Blue', 'aros', 'oro', 25000 , 4),
(DEFAULT, 'Anillo Wish', 'aros', 'plata', 30000 , 4),
(DEFAULT, 'Anillo Cuarzo Greece', 'anillo', 'oro', 40000 , 2);
```# Tienda_de_joyas
