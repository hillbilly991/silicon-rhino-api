'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('event_guest_comments', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      timestamp: {
        type: Sequelize.DATE,
        allowNull: false
      },
      message: {
        type: Sequelize.STRING,
      },
      event_guest_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'event_guests',
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
    await queryInterface.dropTable('event_guest_comments');
  }
};
