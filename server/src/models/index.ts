import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import { UserFactory, User } from './user.js';
import { TicketFactory, Ticket } from './ticket.js';

// Initialize Sequelize instance
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME || '',
      process.env.DB_USER || '',
      process.env.DB_PASSWORD || '',
      {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 5432,
        dialect: 'postgres',
        dialectOptions: {
          decimalNumbers: true,
        },
        logging: false, // 👈 Optional: hide SQL logs in console
      }
    );

// Initialize models
UserFactory(sequelize);
TicketFactory(sequelize);

// Set associations
User.hasMany(Ticket, { foreignKey: 'assignedUserId' });
Ticket.belongsTo(User, { foreignKey: 'assignedUserId', as: 'assignedUser' });

// Export all the things
export { sequelize, User, Ticket };

//=================//
// Cyrl's Notes: for future me who is reading this code (and probably laughing now)...
//=================//
/// logging: false, // 👈 Optional: hide SQL logs in console
// Fully typed User and Ticket: This enables intellisense and type checking in your IDE, making it easier to work with the models.
// Safer env parsing: Handles DB_PORT, DB_HOST, and other environment variables more safely.
// Type safety: The code is now more type-safe, reducing the risk of runtime errors.