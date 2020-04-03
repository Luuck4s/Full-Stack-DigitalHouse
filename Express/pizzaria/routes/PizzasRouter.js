var express = require("express");
var router = express.Router();

const PizzasController = require('../controllers/PizzasController');

router.get("/", PizzasController.index);
router.get("/pizza/", PizzasController.show);
router.get("/pizza/busca", PizzasController.search);
router.get("/pizza/create", PizzasController.create);

router.get("/pizza", PizzasController.list);
router.post("/pizza", PizzasController.store);


module.exports = router;
