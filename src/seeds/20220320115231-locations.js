'use strict';
const { Faker } = require('fakergem');

module.exports = {
  async up (queryInterface, Sequelize) {
    const locations = []
    for (let i = 0; i < 10; i++) {
      locations.push({
        name: Faker.Name.name(),
        longitude: Faker.Address.longitude(),
        latitude: Faker.Address.latitude(),
        created_at: new Date(),
        updated_at: new Date(),
      })
    }
    return queryInterface.bulkInsert('locations', locations);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('locations', null, {});
  }
};
