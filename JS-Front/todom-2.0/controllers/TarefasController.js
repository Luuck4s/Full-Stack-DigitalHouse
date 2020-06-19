const { Usuario, Tarefa } = require("../models");
const { decode, verify, sign } = require("jsonwebtoken");

module.exports = {
  index: async (req, res) => {
    const { authentication } = req.headers;

    if (!authentication) {
      return res.status(403).json({ error: "Token não encontrado" });
    }

    const [, token] = authentication.split(" ");

    try {
      verify(token, "segredo");

      const {
        user,
        user: { id },
      } = decode(token);

      const tasks = await Tarefa.findAll({
        where: {
          usuario_id: id,
        },
      });

      let newToken = sign(user, "segredo");

      return res.json({ tasks, token: newToken });
    } catch (error) {
      return res.status(403).json({ error: error.message });
    }
  },
};
