import { User } from '../models/user.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'spideynohome', password: 'password' },
    { username: 'notrealdrstrange', password: 'password' },
    { username: 'thanossnap', password: 'password' },
  ], { individualHooks: true });
};
