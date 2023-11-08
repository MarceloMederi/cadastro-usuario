const express = require('express');
const cors = require('cors'); // Importe o pacote cors
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const app = express();
const port = 3000;

app.use(cors()); // Use o middleware cors
app.use(express.json());

const dadosFilePath = path.join(__dirname, 'dados.json');

app.use(express.static(__dirname));
app.post('/salvar-dados', (req, res) => {
    const formData = req.body;
    let dados = [];
    try {
        const data = fs.readFileSync(dadosFilePath, 'utf8');
        dados = JSON.parse(data);
    } catch (error) {
        dados = [];
    }

    // Gere um ID único para o novo item de dados
    const novoItem = { id: uuid.v4(), ...formData };

    dados.push(novoItem);
    try {
        fs.writeFileSync(dadosFilePath, JSON.stringify(dados), 'utf8');
        res.send('Dados salvos com sucesso.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao salvar os dados.');
    }
});

app.listen(port, () => {
    console.log('Servidor rodando na porta 3000');
});

// Rota para listar os usuários
app.get('/listar-usuarios', (req, res) => {
    try {
        const data = fs.readFileSync(dadosFilePath, 'utf8');
        const usuarios = JSON.parse(data);
        res.json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao listar os usuários.');
    }
});

//Rota para excluir os usuarios
app.get('/exclusaoBanco.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'exclusaoBanco.html'));
});
  
app.delete('/excluir-usuario/:id', (req, res) => {
    const userId = req.params.id;
    try {
        const data = fs.readFileSync(dadosFilePath, 'utf8');
        let usuarios = JSON.parse(data);
        const index = usuarios.findIndex(user => user.id === userId);

        if (index !== -1) {
            usuarios.splice(index, 1); // Remove o usuário do array
            fs.writeFileSync(dadosFilePath, JSON.stringify(usuarios), 'utf8');
            res.send('Usuário excluído com sucesso.');
        } else {
            res.status(404).send('Usuário não encontrado.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao excluir o usuário.');
    }
});

  