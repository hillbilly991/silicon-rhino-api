'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   const locations =  [{
        name: 'Be at One',
        longitude: 51.5202,
        latitude: 0.1004,
        created_at: new Date(),
        updated_at: new Date(),
    }, {
        name: 'The Conductor',
        longitude: 51.5164,
        latitude: 0.1036,
        created_at: new Date(),
        updated_at: new Date(),
    }, {
        name: 'Bounce',
        longitude: 51.5180,
        latitude: 0.1083,
        created_at: new Date(),
        updated_at: new Date(),
    }, {
        name: 'The Fence',
        longitude: 51.5201,
        latitude: 0.1036,
        created_at: new Date(),
        updated_at: new Date(),
    }, {
        name: 'Smithfields',
        longitude: 51.5194,
        latitude: 0.1014,
        created_at: new Date(),
        updated_at: new Date(),
    }]
    return queryInterface.bulkInsert('locations', locations);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('locations', null, {});
  }
};
