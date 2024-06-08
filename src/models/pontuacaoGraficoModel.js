var database = require("../database/config")

function obter() {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obter(): ")
    var instrucaoSql = ` select integrantesLoona.nome, count(votosIntegranteFavorita.fkIntegrante) as votosIntegrante from votosIntegranteFavorita 
join integrantesLoona on fkIntegrante = idIntegrante
group by integrantesLoona.nome
order by votosIntegrante;
    `;
    // console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obter
}