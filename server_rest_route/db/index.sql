
CREATE DATABASE company

CREATE TABLE employeess(
    id serial,
    name VARCHAR(50) NOT NULL,
    gender VARCHAR(7) NOT NULL,
    departement VARCHAR(50) NOT NULL,
    about text,
    PRIMARY KEY(id)
);