const express = require('express');

const app = express();

app.use(express.json());

const alunos = ['José', 'Maria', 'João'];

// Retorna um aluno
// Resposta do Status: 200 OK
app.get('/alunos/:index', (req, res) => {
    const { index } = req.params;

    return res.json(alunos[index]);
});

// Retornar todos os alunos
// Resposta do Status: 200 OK
app.get('/alunos', (req, res) => {
    return res.json(alunos);
});

// Criar um novo aluno
// Resposta do Status: 200 OK
app.post('/alunos', (req, res) => {
    const { name } = req.body;
    alunos.push(name);

    return res.json(alunos);
});

// Atualizar um aluno
// Resposta do Status: 200 OK
app.put('/alunos', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    alunos[index] = name;

    return res.json(alunos);
});

// Deletar um aluno
// Resposta do Status: 200 OK
app.delete('/alunos/:index', (req, res) => {
    const{ index } = req.params;

    alunos.splice(index, 1);
    return res.json({ message: 'O aluno foi deletado' });
});


app.listen(3030);
