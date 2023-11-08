//Redireciona para a pagina seguinte apos 2 segundo
setTimeout(function () {
    window.location.href = 'principal.html';
}, 1000);

function abrirCadastro() {
    window.location.replace("cadastro.html");
}

// Função para extrair parâmetros da URL
function obterParametroDaURL(nome) {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get(nome);
}

// Verifica se há dados na URL
const dadosDaURL = obterParametroDaURL("dados");

if (dadosDaURL) {
    // Injeta a tabela na página
    document.getElementById("tabela").innerHTML = decodeURIComponent(dadosDaURL);
}