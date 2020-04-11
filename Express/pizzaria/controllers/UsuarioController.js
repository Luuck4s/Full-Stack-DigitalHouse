const usuarios = require("../database/Usuarios.json");
const fs = require("fs");

const { generateHash } = require("../lib/handleHash");

module.exports = {
  show: (req, res) => {
    res.render("crud-usuarios/list", { usuarios });
  },

  create: (req, res) => {
    res.render("crud-usuarios/create");
  },

  store: (req, res) => {
    let { nome, email, senha } = req.body;

    let id = usuarios[usuarios.length - 1].id + 1;

    senha = generateHash(senha);

    const usuario = { id, nome, email, senha };
    usuarios.push(usuario);

    fs.writeFileSync("database/Usuarios.json", JSON.stringify(usuarios));

    res.redirect("/usuario");
  },

  delete: (req, res) => {
    let indexUsuario = usuarios.findIndex((usuario) => {
      return usuario.id == req.params.id;
    });

    usuarios.splice(indexUsuario, 1);

    fs.writeFileSync("database/Usuarios.json", JSON.stringify(usuarios));

    res.redirect("/usuario");
  },

  edit: (req, res) => {
    let id = req.params.id;

    let usuario = usuarios.find((usuario) => usuario.id == id);

    res.render("crud-usuarios/edit", { usuario });
  },

  update: (req, res) => {
    let { nome, email, senha } = req.body;

    let indexUsuario = usuarios.findIndex((usuario) => {
      return usuario.id == req.params.id;
    });

    usuarios[indexUsuario].nome = nome.trim();
    usuarios[indexUsuario].email = email.trim();
      
    if(senha !== ''){
      usuarios[indexUsuario].senha = generateHash(senha);
    }
  
    fs.writeFileSync("database/Usuarios.json", JSON.stringify(usuarios));

    res.redirect("/usuario");
  },
};
