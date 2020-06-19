const { Usuario } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async (req, res) => {
    // Lendo dados do vorpo da requisição
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ error: "Bad Request" });
    }

    // Encontrando o usuário com o email passado
    const user = await Usuario.findOne({ where: { email } });

    if (!user) {
      return res.status(403).json({ error: "User not authorized" });
    }

    if (!bcrypt.compareSync(senha, user.senha)) {
      return res.status(403).json({ error: "User not authorized" });
    }

    // removendo hash de usuário
    user.senha = undefined;

    // Criando o token
    let token = jwt.sign({ user }, "segredo", { expiresIn: 5 * 60 });

    // Retornando as info do usuário com o token
    return res.status(200).json({ user, token });
  },
};
