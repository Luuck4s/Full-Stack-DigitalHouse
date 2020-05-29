"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "posts",
      [
        {
          id: 1,
          texto: "Dia super legal",
          img: "",
          n_likes: 5,
          usuarios_id: 1,
        },
        {
          id: 2,
          texto: "Curtindo as festas",
          img: "",
          n_likes: 1,
          usuarios_id: 2,
        },
        {
          id: 3,
          texto: "Comemorando mais 1 ano :)",
          img: "",
          n_likes: 4,
          usuarios_id: 3,
        },
        {
          id: 4,
          texto: "Ihaaa festa",
          img: "",
          n_likes: 2,
          usuarios_id: 4,
        },
        {
          id: 5,
          texto: "Parabéns a todos!",
          img: "",
          n_likes: 5,
          usuarios_id: 5,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posts", null, {});
  },
};
