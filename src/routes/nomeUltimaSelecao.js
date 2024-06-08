var express = require("express");
var router = express.Router();

var nomeUltimaSelecaoController = require("../controllers/nomeUltimaSelecaoController");

router.get("/guardar", function (req, res) {
    nomeUltimaSelecaoController.guardar(req, res);
});

module.exports = router;