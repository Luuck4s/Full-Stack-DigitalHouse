var express = require("express");
var router = express.Router();

const upload = require("../lib/upload");

const PizzasController = require("../controllers/PizzasController");

router.get("/", PizzasController.index);

router.get("/pizza/busca", PizzasController.search);
router.get("/pizza/create", PizzasController.create);

router.post("/pizza", upload.single("img"), PizzasController.store);
router.get("/pizza/:id", PizzasController.show);

router.get('/pizza/:id/edit', PizzasController.edit);

router.get("/pizza", PizzasController.list);

router.delete('/pizza/:id', PizzasController.delete);

router.put('/pizza/:id/update', upload.single("img"), PizzasController.update);

module.exports = router;
