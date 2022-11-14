DROP DATABASE IF EXISTS hamkke;

CREATE DATABASE hamkke;
use hamkke;

CREATE TABLE lists (
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
);