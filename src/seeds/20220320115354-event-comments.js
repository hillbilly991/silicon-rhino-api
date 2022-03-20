'use strict';
const _ = require('lodash');
const { Faker } = require('fakergem');

module.exports = {
  async up (queryInterface, Sequelize) {
    const events = await queryInterface.sequelize.query('SELECT * FROM `events`', {
      raw: true
    })
    const users = await queryInterface.sequelize.query('SELECT * FROM `users`', {
      raw: true
    })
    const randomHelper = (array) => {
      return array[array.length * Math.random() | 0]
    }
    const sampleOfEvents = _.sampleSize(events[0], 37)
    const eventComments = []
    sampleOfEvents.forEach(async (event) => {
       eventComments.push({
            event_id: event.id,
            user_id: randomHelper(users[0]).id,
            message: Faker.Lorem.sentence(3),
            timestamp: Faker.Time.forward(1, Faker.Time.MORNING),
            created_at: new Date(),
            updated_at: new Date()
        })
    })

    return queryInterface.bulkInsert('event_comments', eventComments);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('event_comments', null, {});
  }
};
