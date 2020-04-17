const usuarios = require("../database/Usuarios.json");
const { compareHash } = require("../lib/handleHash");

module.exports = {
  show: (req, res) => {
    res.render("crud-usuarios/login");
  },
  login: (req, res) => {
    const { email, senha } = req.body;

    const user = usuarios.find((user) => {
      return user.email === email && compareHash(user.senha, senha)
    });

    if (user) {
      req.session.user = JSON.stringify(user);
      return res.redirect('/pizza');
    }

    res.redirect('/login');
  },
};
