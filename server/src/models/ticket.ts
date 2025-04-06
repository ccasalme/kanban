import {
  DataTypes,
  Sequelize,
  Model,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  ForeignKey,
} from 'sequelize';
import { User } from './user.js';

export class Ticket extends Model<
  InferAttributes<Ticket>,
  InferCreationAttributes<Ticket>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare status: 'Todo' | 'In Progress' | 'Done';
  declare description: string;
  declare assignedUserId: ForeignKey<User['id']> | null;

  declare readonly assignedUser?: User;

  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
}

export function TicketFactory(sequelize: Sequelize): typeof Ticket {
  Ticket.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('Todo', 'In Progress', 'Done'),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      assignedUserId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    },
    {
      sequelize,
      tableName: 'tickets',
      timestamps: true, // Still keeps Sequelize's auto handling
    }
  );

  return Ticket;
}



//=================//
// Cyrl's Notes: for future me who is reading this code (and probably laughing now)...
//=================//
// This code defines a Ticket model for a Sequelize ORM.
// Sequelize still manages the createdAt and updatedAt fields automatically.
// Timestamps are explicitly defined