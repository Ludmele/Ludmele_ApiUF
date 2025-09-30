//servico.js

import colecaoUf from '../dados/dados.js';

//---------------Retorna toda a coleção---------------
export const buscarUfs = () => {
    return colecaoUf;
}

//---------------Busca Uf pelo nome---------------
export const buscarUfsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

//---------------Retorna o id especifico---------------
export const buscarUfPorId = (id => {
    const idUF = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUF);
})