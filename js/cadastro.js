function cadastrar() {
    const nome = input_nome.value;
    const email = input_email.value;
    const senha = input_senha.value;
    const confirmarSenha = input_confirmar_senha.value;

    if (email != "" || senha != "" || confirmarSenha != "" || nome != "") {
        for (let posicao = 0; posicao < email.length; posicao++) {
            if (email[posicao] == '@') {
                break;
            }else{
                alert('Preencha todos os campos corretamente!')
            }
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

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          nomeServer: nome,
          emailServer: email,
          senhaServer: senha
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);
  
          if (resposta.ok) {
  
            alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...")
  
            setTimeout(() => {
              window.location = "login.html";
            }, "2000");
  
            limparFormulario();
          } else {
            throw alert("Houve um erro ao tentar realizar o cadastro!");
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });
  
      return false;
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../Login e Cadastro/login.html";
}
