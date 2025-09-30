//indexxx_3.js

import listaCompras from "./dados/dadosss_3.js"
import express from 'express';

const app = express();

app.get('/compras', (req, res) => {
    res.json(listaCompras);
});

app.get('/compras/:idcompras', (req, res) => {
    const idCOMPRAS = parseInt(req.params.idcompras);
    const lista = listaCompras.find(u => u.id === idCOMPRAS);
    res.json(lista);
});

//Tratamento de Erro: \/
app.get('/compras/:idcompras', (req, res) => {
    const idCOMPRAS = parseInt(req.params.idcompras);
    let mensagemErro = '';
    let lista;

    if (!(isNaN(idCOMPRAS))) {
        lista = listaCompras.find(u => u.id === idCOMPRAS);
        if (!lista);
    }
});

