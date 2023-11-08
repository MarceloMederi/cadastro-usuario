document.getElementById('cadastroForms').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        dataNascimento: document.getElementById('data_nascimento').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        pais: document.getElementById('pais').value
    };

    // Enviar os dados para o servidor
    fetch('/salvar-dados', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        // Verificar a resposta do servidor
        if (data === 'Dados salvos com sucesso.') {
            // Exibir a mensagem de confirmação
            document.getElementById('resultado').style.display = 'block';
            document.getElementById('cadastroForms').style.display = 'none';
        } else {
            // Exibir uma mensagem de erro em caso de falha
            alert('Ocorreu um erro ao salvar os dados no servidor.');
        }
    })
    .catch(error => {
        console.error(error);
        alert('Ocorreu um erro ao enviar os dados para o servidor.');
    });
});