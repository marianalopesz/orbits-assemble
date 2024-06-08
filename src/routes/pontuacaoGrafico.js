var express = require("express");
var router = express.Router();

var pontuacaoGraficoController = require("../controllers/pontuacaoGraficoController");

router.get("/obter", function (req, res) {
    pontuacaoGraficoController.obter(req, res);
});

module.exports = router;