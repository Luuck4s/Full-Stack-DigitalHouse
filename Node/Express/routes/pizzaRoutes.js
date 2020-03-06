const express = require("express")
const PizzaController = require("../controllers/PizzaController")

/**
 * Para criação de rotas usa a função Router() do express
 */
const router = express.Router()

router.get("/", PizzaController.listarPizzas);
router.get("/:id", PizzaController.mostrarPizza);

module.exports = router;