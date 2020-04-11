var express = require("express");
var router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');

router.get("/", UsuarioController.show);

router.get("/create", UsuarioController.create);
router.post("/", UsuarioController.store);

router.delete('/:id', UsuarioController.delete);

router.get("/:id/edit", UsuarioController.edit);
router.put("/:id/update", UsuarioController.update);

module.exports = router;