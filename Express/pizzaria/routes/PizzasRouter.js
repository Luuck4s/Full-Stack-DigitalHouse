var express = require("express");
var router = express.Router();

const upload = require("../lib/upload");

const PizzasController = require("../controllers/PizzasController");

const AuthMiddleware = require("../middlewares/AuthMiddleware");

router.get("/pizza", AuthMiddleware, PizzasController.list);
router.post(
  "/pizza",
  AuthMiddleware,
  upload.single("img"),
  PizzasController.store
);
router.get("/pizza/create", AuthMiddleware, PizzasController.create);
router.put(
  "/pizza/:id/update",
  AuthMiddleware,
  upload.single("img"),
  PizzasController.update
);
router.get("/pizza/:id/edit", AuthMiddleware, PizzasController.edit);
router.delete("/pizza/:id", AuthMiddleware, PizzasController.delete);

router.get("/", PizzasController.index);
router.get("/pizza/busca", PizzasController.search);
router.get("/pizza/:id", PizzasController.show);

module.exports = router;
