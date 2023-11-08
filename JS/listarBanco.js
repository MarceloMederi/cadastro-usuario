// Função para listar os usuários
function listarUsuarios() {
    fetch('http://localhost:3000/listar-usuarios')
        .then(response => response.json())
        .then(usuarios => {
            const listaUsuarios = document.getElementById('lista-usuarios-ul');
            listaUsuarios.innerHTML = usuarios.map(usuario => `
                <li>
                    <h2>${usuario.nome}</h2>
                    <p>Email: ${usuario.email}</p>
                    <p>Data de Nascimento: ${usuario.dataNascimento}</p>
                    <p>Cidade: ${usuario.cidade}</p>
                    <p>Estado: ${usuario.estado}</p>
                    <p>Pais: ${usuario.pais}</p>
                </li>
            `).join('');
            console.log(usuarios); // Adicione esta linha para verificar os dados
        })
        .catch(error => {
            console.error(error);
            alert("Erro ao listar os usuários");
        });
}

// Chame a função para listar os usuários quando a página for carregada
listarUsuarios();