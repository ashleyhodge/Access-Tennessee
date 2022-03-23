const seedUsers = require('./user-seeds');
const seedBusiness = require('./business-seeds');
const seedImpair = require('./impair-seeds');
const seedSuggestion = require('./suggest-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedBusiness();
    console.log('\n----- BUSINESSES SEEDED -----\n');

    await seedImpair();
    console.log('\n----- IMPAIRMENTS SEEDED -----\n');

    await seedSuggestion();
    console.log('\n----- SUGGESTIONS SEEDED -----\n');

    process.exit(0);
};

seedAll();