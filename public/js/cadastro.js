function cadastrar() {
    const nome = input_nome.value;
    const email = input_email.value;
    const senha = input_senha.value;
    const confirmarSenha = input_confirmar_senha.value;

    if (email != "" || senha != "" || confirmarSenha != "" || nome != "") {
        for (let posicao = 0; posicao < email.length; posicao++) {
           /* if (email[posicao] == '@') {
                break;
            }else{
                alert('Preencha todos os campos corretamente!')
            }*/
        }
        if (senha.length <= 10) {
            if (confirmarSenha == senha) {
                window.location = "../Login e Cadastro/login.html";
            } else {
                alert('Preencha todos os campos corretamente!');
            }
        } else {
            alert('Preencha todos os campos corretamente!');
        }
    } else {
        alert('Preencha todos os campos corretamente!');
    }
  }
