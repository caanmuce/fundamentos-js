create database lab_node;
use lab_node;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombreEmpresa VARCHAR(150) NOT NULL,
  nit VARCHAR(20) UNIQUE NOT NULL,
  representante VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  telefono VARCHAR(20) NOT NULL,
  direccion VARCHAR(200) NOT NULL,
  ciudad VARCHAR(100) NOT NULL,
  tipoProveedor ENUM('Natural', 'Jurídica') NOT NULL,
  fechaVinculacion DATE NOT NULL,
  docPDF VARCHAR(255),
  logoEmpresa VARCHAR(255),
  fechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


















































