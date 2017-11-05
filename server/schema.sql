CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/

  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar(200)  NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */


CREATE TABLE users (
  id        int    NOT NULL AUTO_INCREMENT,
  username  varchar(40)   NOT NULL,
  PRIMARY KEY (ID)
);




/*DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  userid INT NOT NULL,
  roomname VARCHAR(255),
  text VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);*/



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables./**/
 -- CREATE TABLE users_rooms (
 --  roomId INT NOT NULL,
 --  userId INT NOT NULL,
 --  FOREIGN KEY(userId) REFERENCES users(userId),
 --  FOREIGN KEY(roomId) REFERENCES rooms(roomId)

--  CREATE TABLE rooms (
--   roomId INT NOT NULL AUTO_INCREMENT,
--   name VARCHAR(255),
--   PRIMARY KEY(roomId)
-- );
