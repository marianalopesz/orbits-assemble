var express = require("express");
var router = express.Router();

var qtdVotosController = require("../controllers/qtdVotosController");

router.get("/contar", function (req, res) {
    qtdVotosController.contar(req, res);
});

module.exports = router;