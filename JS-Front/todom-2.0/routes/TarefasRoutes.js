const express = require("express");
const router = express.Router();
const { authentication } = require("../middlewares/authentication");

const TarefasController = require("../controllers/TarefasController.js");

router.post("/tarefa", authentication, TarefasController.store);

router.get("/tarefas", authentication, TarefasController.index);

router.put("/tarefa/:taskId", authentication, TarefasController.toggleTask);

router.delete("/tarefa/:taskId", authentication, TarefasController.delete);

module.exports = router;
