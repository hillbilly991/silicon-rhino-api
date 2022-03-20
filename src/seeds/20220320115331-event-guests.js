'use strict';
const _ = require('lodash');

module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query('SELECT * FROM `users`', {
      raw: true
    })
    const events = await queryInterface.sequelize.query('SELECT * FROM `events`', {
      raw: true
    })
    const eventGuests = []
    for(const i in events[0]) {
      const event = events[0][i]
      _.sampleSize(users[0], 5).forEach(async (user) => {
        eventGuests.push({
            event_id: event.id,
            guest_id: user.id,
            created_at: new Date(),
            updated_at: new Date()
        });
      })
    }

    return queryInterface.bulkInsert('event_guests', eventGuests);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('event_guests', null, {});
  }
};
