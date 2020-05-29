"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "posts",
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
        img: {
          type: Sequelize.STRING,
        },
        n_likes: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        usuarios_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "usuarios",
            key: "id",
          },
          onUpdate: "SET NULL",
          onDelete: "CASCADE",
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("posts");
  },
};
