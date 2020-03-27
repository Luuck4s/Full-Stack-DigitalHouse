var express = require("express");
var router = express.Router();

const PizzasController = require('../controllers/PizzasController');

router.get("/", PizzasController.index);
router.get("/Pizza/:id", PizzasController.search);

module.exports = router;
