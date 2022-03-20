'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('event_comments', {
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
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      event_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'events',
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
    await queryInterface.dropTable('event_comments');
  }
};
