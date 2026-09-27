# Fundamentos de JavaScript | SENA

Repositorio de ejercicios y practicas realizadas durante el aprendizaje de los fundamentos de **JavaScript** en el SENA. El contenido avanza desde los primeros conceptos del lenguaje hasta pequenos proyectos con formularios, manipulacion del DOM, validaciones y una base de datos MySQL.

> **Estado:** material de aprendizaje en construccion. Cada carpeta representa una etapa, ejercicio o experimento del proceso.

## Que se aprende aqui

- Declarar variables y trabajar con tipos de datos.
- Recibir datos desde el navegador y la terminal.
- Aplicar operadores aritmeticos, relacionales y logicos.
- Resolver problemas con estructuras condicionales y ciclos.
- Crear funciones reutilizables y trabajar con parametros y retornos.
- Manipular arreglos con operaciones de insercion, busqueda y eliminacion.
- Conectar JavaScript con paginas HTML mediante eventos y el DOM.
- Validar formularios y mostrar resultados en tablas.
- Preparar una base de datos MySQL para un registro de proveedores.

## Ruta de aprendizaje

| Etapa | Carpeta | Temas y ejercicios principales |
| --- | --- | --- |
| 1 | [`introduccion`](introduccion/) | Primeros scripts en el navegador, `prompt`, `alert`, suma de numeros y calculo de edad. |
| 2 | [`tipo datos`](tipo%20datos/) y [`tipo_datos`](tipo_datos/) | `String`, `Number`, `Boolean`, `null`, `undefined`, `typeof` y conversion de entradas. |
| 3 | [`operadores`](operadores/) | Operadores relacionales, igualdad estricta, comparaciones de precios y notas, `&&`, `||` y `!`. |
| 4 | [`condicionales`](condicionales/) | Formulario HTML para ingresar notas y practicar decisiones basadas en datos. |
| 5 | [`ciclos`](ciclos/) | Ciclos `for` y `while`, conteos, sumas, promedios, tablas de multiplicar y numero secreto. |
| 6 | [`funciones`](funciones/) | Funciones declaradas, funciones anonimas, parametros, valores de retorno y promedio de notas. |
| 7 | [`ARRAY`](ARRAY/) | Lista de compras con arreglos, menu interactivo, `push`, `pop`, `shift`, `unshift`, `splice`, `includes` e `indexOf`. |
| 8 | [`calculadora`](calculadora/) | Interfaz web con botones, eventos del DOM, operaciones basicas, limpieza y manejo de errores. |
| 9 | [`validaciones`](validaciones/) | Formulario de proveedores, expresiones regulares, validacion de archivos y renderizado de registros en una tabla. |
| 10 | [`db.sql`](db.sql) y [`conexion.js`](conexion.js) | Creacion de la base `lab_node`, tabla `usuarios` y prueba de conexion con MySQL mediante `mysql2`. |

## Proyectos practicos

### Calculadora web

La carpeta [`calculadora`](calculadora/) contiene una calculadora construida con HTML y JavaScript. Practica:

- Seleccion de elementos con `getElementById`.
- Eventos `click` en botones.
- Actualizacion del valor de un campo de pantalla.
- Operaciones, borrado parcial y limpieza completa.
- Tratamiento de expresiones no validas mediante `try...catch`.

Abre [`calculadora/index.html`](calculadora/index.html) en el navegador o utiliza Live Server.

### Generador de tablas

En [`ciclos/for/tablas`](ciclos/for/tablas/) se genera la tabla de multiplicar de un numero o todas las tablas del 1 al 10. El ejercicio combina formularios, eventos, ciclos anidados y escritura dinamica en el DOM.

### Lista de compras

[`ARRAY/productos.js`](ARRAY/productos.js) es un programa de consola con un menu para agregar, mostrar, buscar, eliminar y vaciar productos. Tambien genera el archivo [`ARRAY/reporte.txt`](ARRAY/reporte.txt) usando el modulo `fs` de Node.js.

### Registro y validacion de proveedores

La carpeta [`validaciones`](validaciones/) presenta un formulario para registrar proveedores. Incluye validaciones para:

- Nombre de empresa y representante.
- Formato del NIT y correo electronico.
- Tipo de proveedor.
- Documento PDF obligatorio.
- Logo o fotografia en formato JPG o PNG.

Cuando los datos son validos, el registro se agrega visualmente a una tabla. Esta carpeta tambien declara dependencias de `express` y `mysql2` como base para continuar el desarrollo del lado servidor.

## Como ejecutar los ejercicios

### Requisitos

- [Node.js](https://nodejs.org/) y npm para los ejercicios de consola.
- Un navegador web para los ejercicios HTML.
- MySQL, solo para probar [`db.sql`](db.sql) y [`conexion.js`](conexion.js).
- Live Server es recomendable para trabajar comodo con las paginas HTML, aunque tambien pueden abrirse directamente en el navegador.

### Ejercicios de Node.js

Las dependencias se administran por carpeta. Por ejemplo:

```bash
cd funciones
npm install
node ejemplo5.js
```

Otros puntos de entrada utiles:

```bash
cd ARRAY
npm install
node productos.js
```

```bash
cd ciclos/while
npm install
node numerosecreto.js
```

Tambien se pueden ejecutar directamente los archivos que no requieren paquetes externos:

```bash
node operadores/relacional1.js
node ciclos/while/SumaNumeros.js
```

### Ejercicios en el navegador

Abre una de estas paginas:

- [`introduccion/eje_1.html`](introduccion/eje_1.html)
- [`introduccion/eje_2.html`](introduccion/eje_2.html)
- [`calculadora/index.html`](calculadora/index.html)
- [`ciclos/for/tablas/index.html`](ciclos/for/tablas/index.html)
- [`condicionales/formulario.html`](condicionales/formulario.html)
- [`validaciones/public/index.html`](validaciones/public/index.html)

Los archivos JavaScript asociados se cargan desde cada HTML mediante la etiqueta `<script>`.

### MySQL

1. Inicia el servicio de MySQL.
2. Ejecuta el contenido de [`db.sql`](db.sql) para crear la base `lab_node` y la tabla `usuarios`.
3. Revisa las credenciales de [`conexion.js`](conexion.js) y ajustalas a tu entorno.
4. Instala `mysql2` en el entorno desde el que ejecutes la conexion.

La tabla `usuarios` contempla empresa, NIT, representante, correo, telefono, direccion, ciudad, tipo de proveedor, fecha de vinculacion y rutas de archivos adjuntos.

## Estructura del repositorio

```text
fundamentos-js/
|-- introduccion/       # Primeros ejercicios con navegador
|-- tipo datos/         # Tipos de datos y typeof
|-- tipo_datos/         # Practica de tipos con Node.js
|-- operadores/         # Comparaciones y logica booleana
|-- condicionales/      # Formulario de notas
|-- ciclos/             # For, while y tablas
|-- funciones/          # Funciones y promedios
|-- ARRAY/              # Lista de compras y reporte
|-- calculadora/        # Calculadora web
|-- validaciones/       # Formulario y validaciones
|-- db.sql              # Estructura de la base de datos
|-- conexion.js         # Conexion inicial con MySQL
```

## Proximos aprendizajes

Este repositorio deja preparada la base para continuar con:

- Modularizacion con `require` y `module.exports`.
- Validacion y sanitizacion tambien en el servidor.
- Integracion completa entre el formulario, Express y MySQL.
- Operaciones CRUD para proveedores.
- Promesas, `async/await` y consumo de APIs.
- Buenas practicas de nombres, manejo de errores y pruebas.

## Autor

Material elaborado como parte del proceso de formacion en tecnologia del **SENA**.