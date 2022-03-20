'use strict';
const { Faker } = require('fakergem');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [];

    for (let i = 0; i < 10; i++) {
        users.push({
          name: Faker.Name.name(),
          avatar_url: Faker.Avatar.image(),
          created_at: new Date(),
          updated_at: new Date(),
        })
    }

    return queryInterface.bulkInsert('users', users);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
}
