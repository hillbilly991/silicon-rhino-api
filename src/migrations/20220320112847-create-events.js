'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('events', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING
      },
      creator_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      location_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'locations',
          key: 'id'
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('events');
  }
};
