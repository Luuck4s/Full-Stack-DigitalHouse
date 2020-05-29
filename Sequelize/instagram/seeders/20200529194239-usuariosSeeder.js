"use strict";

const {hashSync} = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "usuarios",
      [
        {
          id: 1,
          nome: "John Doe",
          email: "jd@dh.com",
          senha: hashSync('123456',10),
        },
        {
          id: 2,
          nome: "Lucas",
          email: "lucas@dh.com",
          senha: hashSync('123456',10),
        },
        {
          id: 3,
          nome: "Sergio",
          email: "sergio@dh.com",
          senha: hashSync('123456',10),
        },
        {
          id: 4,
          nome: "Gabas",
          email: "gabas@dh.com",
          senha: hashSync('123456',10),
        },
        {
          id: 5,
          nome: "Vini",
          email: "vini@dh.com",
          senha: hashSync('123456',10),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("usuarios", null, {});
  },
};
