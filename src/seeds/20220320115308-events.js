'use strict';
const { Faker } = require('fakergem');

module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query('SELECT * FROM `users`', {
      raw: true
    })
    const locations = await queryInterface.sequelize.query('SELECT * FROM `locations`', {
      raw: true
    })

    const randomHelper = (array) => {
      return array[array.length * Math.random() | 0]
    }
    const events = []

    for (let i = 0; i < 10; i++) {
      const types = [
        'BEERS',
        'COCKTAILS',
        'COFFEES',
        'MILKSHAKES'
      ]
      events.push({
        time: Faker.Time.forward(23, Faker.Time.EVENING),
        title: Faker.Company.name(),
        type: randomHelper(types),
        creator_id: randomHelper(users[0]).id,
        location_id: randomHelper(locations[0]).id,
        created_at: new Date(),
        updated_at: new Date(),
      })
    }

    return queryInterface.bulkInsert('events', events);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('locations', null, {});
  }
};
