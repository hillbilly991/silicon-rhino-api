'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('event_guests', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      event_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'events',
          key: 'id'
        }
      },
      guest_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'users',
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
    await queryInterface.dropTable('event_guests');
  }
};
