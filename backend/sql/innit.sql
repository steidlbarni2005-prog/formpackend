CREATE DATABASE konyvek
DEFAULT CHARACTER SET utf8 
COLLATE utf8_hungarian_ci;

CREATE TABLE konyv (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cim VARCHAR(255) NOT NULL,
    szerzo VARCHAR(255) NOT NULL,
    kiado VARCHAR(255),
    kiadaseve INT,
    oldalszam INT,
    konyvmufaja VARCHAR(100),
    konyvarasarlasiar INT(67)
);
