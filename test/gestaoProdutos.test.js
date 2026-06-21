import {pegarNomeDoProduto} from '../src/gestaoProdutos.js';
import assert from 'node:assert';

describe('testes gestao produto', function(){
    it('validar que o vetor de indice 2 retorna macBook', function(){
        //Arrage: o que eu preciso para testar a função
        const indice = 2;
        const nomeEsperado = 'MacBook Pro M5';

        //Act
        const nomeRetornado = pegarNomeDoProduto(indice);

        //Assert
        assert.equal(nomeRetornado,nomeEsperado);
    });
});


