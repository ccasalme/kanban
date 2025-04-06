-- DROP & RECREATE DATABASE
DROP DATABASE IF EXISTS kanban_db;
CREATE DATABASE kanban_db;

-- Connect to new DB
\c kanban_db;

-- ENUM for ticket statuses
CREATE TYPE ticket_status AS ENUM ('Todo', 'In Progress', 'Done');

-- USERS TABLE
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TICKETS TABLE
CREATE TABLE tickets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  status ticket_status NOT NULL,
  description TEXT NOT NULL,
  assigned_user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
