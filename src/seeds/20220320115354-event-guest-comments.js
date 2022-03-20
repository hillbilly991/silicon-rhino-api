'use strict';
const _ = require('lodash');
const { Faker } = require('fakergem');

module.exports = {
  async up (queryInterface, Sequelize) {
    const eventGuests = await queryInterface.sequelize.query('SELECT * FROM `event_guests`', {
      raw: true
    })
    const sampleOfEventGuests = _.sampleSize(eventGuests[0], 37)
    const eventGuestComments = []
    sampleOfEventGuests.forEach(async (eventGuest) => {
       eventGuestComments.push({
            event_guest_id: eventGuest.id,
            message: Faker.Lorem.sentence(3),
            timestamp: Faker.Time.forward(1, Faker.Time.MORNING),
            created_at: new Date(),
            updated_at: new Date()
        })
    })

    return queryInterface.bulkInsert('event_guest_comments', eventGuestComments);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('event_guest_comments', null, {});
  }
};
