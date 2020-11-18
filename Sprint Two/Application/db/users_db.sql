-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS users_db;

-- Use database
USE users_db;

-- Create "administrators" table if it doesn't exist
CREATE TABLE IF NOT EXISTS administrators (
        ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
        Email varchar(40),
        PasswordHash varchar(255)
        );

-- Create "members" table if it doesn't exist
CREATE TABLE IF NOT EXISTS members (
        ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
        FirstName VARCHAR(20),
        LastName VARCHAR(20),
	Email VARCHAR(40),
	Newsletter VARCHAR(3),
	BreakingNews VARCHAR(3),
	PendingRemoval VARCHAR(3)
        );
	
-- Administrator account is added to the database automatically upon loading the admin page.