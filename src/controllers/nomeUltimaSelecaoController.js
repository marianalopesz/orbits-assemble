var nomeUltimaSelecaoModel = require("../models/nomeUltimaSelecaoModel");

function guardar(req, res) {


    nomeUltimaSelecaoModel.guardar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas rankings.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    guardar
}