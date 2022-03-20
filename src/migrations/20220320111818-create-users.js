'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      avatar_url: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'https://i0.wp.com/eikongroup.co.uk/wp-content/uploads/2017/04/Blank-avatar.png?ssl=1'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
