DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOlEAN NOT NULL,
    PRIMARY KEY(id)
)