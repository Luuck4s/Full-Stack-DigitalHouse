const { sequelize, Usuario, Post, Comentario } = require("../models");
const bcrypt = require("bcrypt");

const AuthController = {
  login: async (req, res) => {
    const { email, senha } = req.body;

    const response = await Usuario.findOne({ where: { email } });

    if (response && bcrypt.compareSync(senha, response.senha)) {
      req.session.usuario = JSON.stringify(response);
      res.redirect("/home");
    }

    return res.redirect(`/?error=1`);
  },

  showLogin: (req, res) => {
    const { error = "" } = req.query;

    res.render("auth/login", { error });
  },

  showRegistro: (req, res) => {
    res.render("auth/register");
  },

  showHome: async (req, res) => {
    let posts = await Post.findAll({
      include: [
        {
          model: Usuario,
          as: "autor",
          include: "posts",
          attributes: {
            exclude: ["senha"],
          },
        },
        {
          model: Comentario,
          as: "comentarios",
          include: "autor",
        },
      ],
    });

  
    res.render("index", {posts});
  },
};

module.exports = AuthController;
