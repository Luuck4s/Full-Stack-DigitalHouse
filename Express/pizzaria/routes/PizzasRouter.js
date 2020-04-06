var express = require("express");
var router = express.Router();

const PizzasController = require('../controllers/PizzasController');

router.get("/", PizzasController.index);
router.get("/pizza/busca", PizzasController.search);
router.get("/pizza/create", PizzasController.create);
router.get("/pizza/:id", PizzasController.show);

router.post("/pizza", PizzasController.store);
router.get("/pizza", PizzasController.list);



module.exports = router;
