//src/server.ts

//=================//
// Cyrl's Notes: for future me who is reading this code...
//=================//
// This file is the entry point for the server-side application.
// It sets up the Express server, connects to the database, and starts listening for incoming requests.
// It also serves static files from the client-side application.
// It uses dotenv to load environment variables from a .env file.
// It uses Sequelize to connect to a PostgreSQL database.
// It uses the routes defined in the routes/index.js file to handle incoming requests.
// It uses the sequelize.sync() method to synchronize the database schema with the models defined in the models directory.


import express from 'express';
import dotenv from 'dotenv';
import sequelize from './models/index';
import routes from './routes/index'; // assuming you have a routes file

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect routes
app.use('/api', routes);

sequelize.authenticate()
  .then(() => {
    console.log('✅ DB connected');
    return sequelize.sync({ alter: true }); // or force: true if you’re recreating
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is listening on http://localhost:${PORT}`);
    });
  })
  .catch((err: unknown) => {
    console.error('❌ Unable to connect to DB:', err);
  });

