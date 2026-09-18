const mysql = require('mysql2');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'lab_node' });

conexion.connect((error) => {   
    if (error) {
        console.log("error al conectar con la base de datos");
    } else{ 
        console.log ("conexion exitosa");
    }
})