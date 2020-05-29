"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "comentarios",
      [
        {
          texto: "Super banaca",
          usuarios_id: 1,
          posts_id: 2,
        },
        {
          texto: "Maneiro",
          usuarios_id: 2,
          posts_id: 1,
        },
        {
          texto: "Olouco",
          usuarios_id: 3,
          posts_id: 4,
        },
        {
          texto: "Maneiro",
          usuarios_id: 4,
          posts_id: 5,
        },
        {
          texto: "Obrigado",
          usuarios_id: 5,
          posts_id: 3,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("comentarios", null, {});
  },
};
