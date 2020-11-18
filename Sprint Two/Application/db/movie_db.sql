-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS movies_db;

-- Use database
USE movies_db;

-- Create table if it doesn't exist
CREATE TABLE IF NOT EXISTS movies (
        ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
        Title VARCHAR(82), 
        Studio VARCHAR(15), 
        Status VARCHAR(12), 
        Sound VARCHAR(11), 
        Versions VARCHAR(18), 
        RecRetPrice DECIMAL(5,2), 
        Rating VARCHAR(5), 
        Year INT, 
        Genre VARCHAR(17), 
        Aspect VARCHAR(6),
        SearchCount INT
        );