-- Drop the DB if it exists (be careful with this!)
DROP DATABASE IF EXISTS kanban_db;

-- Create a fresh database
CREATE DATABASE kanban_db;

-- Connect to the new database
\c kanban_db;

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
  status VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  assigned_user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


