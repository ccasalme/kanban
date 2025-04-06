import { seedUsers } from './user-seeds.js';
import { seedTickets } from './ticket-seeds.js';
import { sequelize } from '../models/index.js';

const seedAll = async (): Promise<void> => {
  try {
    console.log('\n🌱 Starting seed process...');

    await sequelize.sync({ force: true });
    console.log('✅ Database synced');

    await seedUsers();
    console.log('👥 Users seeded');

    await seedTickets();
    console.log('🎫 Tickets seeded');

    console.log('🌟 All data successfully seeded!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedAll();
