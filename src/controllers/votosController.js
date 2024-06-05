var votosModel = require("../models/votosModel");

function enviarVotos(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario = req.params.idUsuario;
    var fkIntegrante = req.body.fkIntegrante;

    // Faça as validações dos valores
    if (fkIntegrante == undefined) {
        res.status(400).send("A integrante está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        votosModel.enviarVotos(fkUsuario, fkIntegrante)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao efetuar votos! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    enviarVotos
}