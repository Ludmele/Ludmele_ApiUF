//indexx_2.js

import colecaoNomes from "./dados/dadoss_2.js"
import express from 'express';

const app = express();

app.get('/nomes', (req, res) => {
    res.json(colecaoNomes);
});

app.get('/nomes/:idnomes', (req, res) => {
    const idNOMES = parseInt(req.params.idnomes);
    const nome = colecaoNomes.find(u => u.id == idNOMES);
    res.json(nome);
});

//Tratamento de erro: \/
app.get('/nomes/:idnomes', (req, res) => {
    const idNOMES = parseInt(req.params.idnomes);
    let mensagemErro = '';
    let nomes;

    if (!(isNaN(idNOMES))) {
        nomes = colecaoNomes.find(u => u.id === idNOMES);
        if (!nomes) {
            mensagemErro = 'Nome não encontrado';
        }
    } else {
        mensagemErro = 'Requisição inválida';
    }

    if (nomes) {
        res.json(nomes);
    } else {
        res.status(404).json({ "erro": mensagemErro })
    }
});

app.listen(8086, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8086 em: ' + data);
});