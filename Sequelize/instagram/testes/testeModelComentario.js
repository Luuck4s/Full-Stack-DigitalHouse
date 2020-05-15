const { sequelize, Comentario } = require("../models");

Comentario.findAll({ include: ["autor", "posts"] }).then((data) => {
  console.log(data.map((u) => u.toJSON()));
  sequelize.close();
});
