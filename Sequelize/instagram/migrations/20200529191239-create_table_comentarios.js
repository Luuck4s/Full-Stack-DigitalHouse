"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "comentarios",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        texto: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        usuarios_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "usuarios",
            key: "id",
          },
          onDelete: "SET NULL",
          onUpdate: "CASCADE",
        },
        posts_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "posts",
            key: "id",
          },
          onDelete: "SET NULL",
          onUpdate: "CASCADE",
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("comentarios");
  },
};
