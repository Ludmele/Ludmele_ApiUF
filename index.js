//index.js

//import colecaoUf from "./dados/dados.js";
//import colecaoUF from "./dados/dados.js";
import express from 'express';
import { buscarUfs, buscarUfPorId, buscarUfsPorNome} from './servicos/servico.js';

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhuma UF encontrada" });
    }
});

app.get('/ufs/:iduf', (req, res) => {
    const idUf = req.params.iduf
    const uf = buscarUfPorId(idUf);

    if (uf) {
        res.json(uf);
    } else if (isNaN(parseInt(idUf))) {
        res.status(400).send({ "erro": "Requisição inválida" });
    } else {
        res.status(404).send({ "erro": "UF não encontrada" })
    }
});

app.get('/ufs', (req, res) => {
    res.json(colecaoUF);
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    const uf = colecaoUF.find(u => u.id == idUF);
    res.json(uf);
});


//---------------Tratamento de erro: \/---------------
app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let mensagemErro = '';
    let uf;

    if (!(isNaN(idUF))) {
        uf = colecaoUf.find(u => u.id === idUF);
        if (!uf) {
            mensagemErro = 'UF não encontrada';
        }
    } else {
        mensagemErro = 'Requisição inválida';
    }

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).json({ "erro": mensagemErro })
    }
});

//-------------Cria uma instância do aplicativo Express-------------

/*const buscarUfsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};*/

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em: ' + data);
});