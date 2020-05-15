const { sequelize, Post, Comentario, Usuario } = require("../models");

Post.findOne({
  include: [
    {
      model: Usuario,
      as: "autor",
      include: "posts",
      // attributes: ['id','nome','email'] <- atributos que irão vim
      attributes: {
        exclude: ["senha"], // <- atributos que você quer excluir
      },
    },
    { 
      model: Comentario,
      as: "comentarios",
      include: "autor" 
    },
  ],
}).then((data) => {
  console.log(data.toJSON());
  sequelize.close();
});
