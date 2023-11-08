function login() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === "Admin" && senha === "webprog") {
        window.location.replace("principal.html");
        alert("Logado com sucesso!")

        //Redireciona para a pagina seguinte apos 2 segundo
        setTimeout(function () {
            window.location.href = 'principal.html';
        }, 1000);

    } else {
        alert("Usuário ou senha inválidos!");
    }
}