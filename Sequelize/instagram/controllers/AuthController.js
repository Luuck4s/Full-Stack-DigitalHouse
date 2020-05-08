const { sequelize, Usuario } = require("../models");
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

  showHome: (req, res) => {
    res.render("index");
  },
};

module.exports = AuthController;
