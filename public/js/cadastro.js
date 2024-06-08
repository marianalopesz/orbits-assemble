const listaNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function validacaoCadastrar() {
    const nome = input_nome.value;
    const email = input_email.value;
    const senha = input_senha.value;
    const confirmarSenha = input_confirmar_senha.value;

    let validar = false;

    if (email == "" || senha == "" || confirmarSenha == "" || nome == "") {
        alert('Preencha todos os campos!')
    } else if (email.indexOf('@') < 0) {
        alert('Preencha o e-mail corretamente.')
    } else if (email.indexOf('.com') < 0) {
        alert('Preencha o e-mail corretamente.')
    } else if (senha.length < 0 || senha.length > 10) {
        alert('Tamanho de senha incorreta')
    } else if (validarSenha()) {
        alert('Senha deve conter números.')
    } else{
        validar = true;
    }
}

function validacaoSenha(){
    for (let posicao = 0; posicao < listaNumeros.length; posicao += 1) {
        if (senha.indexOf(listaNumeros[posicao]) < 0) {
            alert('Senha precisa conter números.')
        }
    }
}
