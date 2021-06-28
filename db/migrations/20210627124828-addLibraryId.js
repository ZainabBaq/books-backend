"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Books", "libraryId", Sequelize.INTEGER, {
      references: {
        model: {
          tableName: "Libraries",
          schema: "schema",
        },
        key: "id",
      },
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Books", "libraryId");
  },
};
