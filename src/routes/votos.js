var express = require("express");
var router = express.Router();

var votosController = require("../controllers/votosController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/enviarVoto/:idUsuario", function (req, res) {
    votosController.enviarVotos(req, res);
})

module.exports = router;
