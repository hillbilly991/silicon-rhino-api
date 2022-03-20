'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   const locations =  [{
        name: 'Be at One',
        longitude: 0.1004,
        latitude: 51.5204,
        created_at: new Date(),
        updated_at: new Date(),
    }, {
        name: 'The Conductor',
        longitude: 0.1036,
        latitude: 51.5164,
        created_at: new Date(),
        updated_at: new Date(),
    }, {
        name: 'Bounce',
        longitude: 0.1083,
        latitude: 51.5180,
        created_at: new Date(),
        updated_at: new Date(),
    }, {
        name: 'The Fence',
        longitude: 0.1036,
        latitude: 51.5201,
        created_at: new Date(),
        updated_at: new Date(),
    }, {
        name: 'Smithfields',
        longitude: 0.1014,
        latitude: 51.5194,
        created_at: new Date(),
        updated_at: new Date(),
    }]
    return queryInterface.bulkInsert('locations', locations);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('locations', null, {});
  }
};
