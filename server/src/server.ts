//src/server.ts
import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import { sequelize } from './models/index.js';
import routes from './routes/index.js';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount all routes
app.use('/', routes);

// Root route (optional)
app.get('/', (_req: Request, res: Response) => {
  res.send('✨ Kanban API is running!');
});

// Connect to DB and start the server
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ DB connected');

    await sequelize.sync({ alter: true }); // use force: true if you’re seeding from scratch
    console.log('🧬 Models synced');

    app.listen(PORT, () => {
      console.log(`🚀 Server is listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Unable to start server:', err);
    process.exit(1);
  }
})();


//=================//
// Cyrl's Notes: for future me who is reading this code (and probably laughing now)...
//=================//
// ✅ Used Application, Request, Response types	TypeScript peace achieved
// ✅ Used IIFE async function	Modern, clean async/await control
// ✅ Moved root route / to the top	Helpful sanity check route
// ✅ Cleaned comment clutter	Code now speaks for itself
// ✅ Corrected import of sequelize	Matched named export style ({ sequelize })
