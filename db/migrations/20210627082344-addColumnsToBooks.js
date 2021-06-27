"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Books", "name", Sequelize.STRING, {});
    await queryInterface.addColumn("Books", "slug", Sequelize.STRING, {});
    await queryInterface.addColumn("Books", "price", Sequelize.INTEGER);
    await queryInterface.addColumn("Books", "img", Sequelize.STRING);
    await queryInterface.addColumn("Books", "description", Sequelize.STRING);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Books", "name");
    await queryInterface.removeColumn("Books", "price");
    await queryInterface.removeColumn("Books", "img");
    await queryInterface.removeColumn("Books", "slug");
    await queryInterface.removeColumn("Books", "description");
  },
};
