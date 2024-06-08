var database = require("../database/config")

function guardar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function guardar(): ")
    var instrucaoSql = `select integrantesLoona.nome as NomeUltimaIntegrante from votosIntegranteFavorita join integrantesLoona on fkIntegrante = idIntegrante 
where idVoto = (select max(idVoto) from votosIntegranteFavorita);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
 guardar
}