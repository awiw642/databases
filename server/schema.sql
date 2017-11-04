-- DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userId INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  PRIMARY KEY(userId)
);

CREATE TABLE rooms (
  roomId INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  PRIMARY KEY(roomId)
);

CREATE TABLE messages (
  messageId INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  roomId INT NOT NULL,
  content TEXT,
  PRIMARY KEY (messageId),
  FOREIGN KEY (userId) REFERENCES users(userId),
  FOREIGN KEY (roomId) REFERENCES rooms(roomId)
);

CREATE TABLE users_rooms (
  roomId INT NOT NULL,
  userId INT NOT NULL,
  FOREIGN KEY(userId) REFERENCES users(userId),
  FOREIGN KEY(roomId) REFERENCES rooms(roomId)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables./**/
