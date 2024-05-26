function direcionarDash() {
    const email = input_email.value;
    const senha = input_senha.value;
    if (email == "" || senha == "") {
        alert('Preencha todos os campos!');
    }else{
        window.location = "../Dashboard/dashboard.html";
    }
    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    })
}
