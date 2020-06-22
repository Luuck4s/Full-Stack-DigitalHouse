const { Usuario, Tarefa } = require("../models");
const { decode, verify, sign } = require("jsonwebtoken");

module.exports = {
  store: async (req, res) => {
    const { authentication } = req.headers;
    const { text, priority, complete } = req.body;

    const [, token] = authentication.split(" ");

    verify(token, "segredo");

    const user = decode(token);

    await Tarefa.create({
      texto: text,
      prioridade: priority,
      feito: complete,
      usuario_id: user.id,
    });

    const tasks = await Tarefa.findAll({
      where: {
        usuario_id: user.id,
      },
    });

    return res.json({ tasks });
  },

  index: async (req, res) => {
    const { authentication } = req.headers;

    const [, token] = authentication.split(" ");

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

    let newToken = sign(user, "segredo", { expiresIn: 10 * 60 });

    return res.json({ tasks, token: newToken });
  },

  toggleTask: async (req, res) => {
    const { taskId } = req.params;
    const { done } = req.body;

    await Tarefa.update(
      {
        feito: done,
      },
      {
        where: {
          id: taskId,
        },
      }
    );

    return res.status(201).send();
  },

  delete: async (req, res) => {
    const { taskId } = req.params;

    await Tarefa.destroy({
      where: {
        id: taskId,
      },
    });

    return res.status(201).send();
  },
};
