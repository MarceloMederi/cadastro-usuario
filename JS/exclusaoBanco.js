// Função para buscar e exibir os dados cadastrados
async function listarCadastros() {
    const response = await fetch('/listar-usuarios');
        const data = await response.json();

        const cadastros = document.getElementById('cadastros');
        cadastros.innerHTML = '';

        data.forEach(user => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                Nome: ${user.nome}<br>
                Email: ${user.email}<br>
                Data de Nascimento: ${user.dataNascimento}<br>
                Cidade: ${user.cidade}<br>
                Estado: ${user.estado}<br>
                País: ${user.pais}<br>
                <button onclick="excluirCadastro('${user.id}')">Excluir</button>
                <hr>
            `;
    cadastros.appendChild(listItem);
});
}

// Função para excluir um cadastro
    async function excluirCadastro(id) {
        const response = await fetch(`/excluir-usuario/${id}`, { method: 'DELETE' });

        if (response.status === 200) {
            alert('Cadastro excluído com sucesso.');
            listarCadastros(); // Atualiza a lista de cadastros após a exclusão
        } else {
            alert('Erro ao excluir o cadastro.');
        }
    }

// Chama a função para listar os cadastros quando a página é carregada
listarCadastros();