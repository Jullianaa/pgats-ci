/*
    Preciso de uma função capaz de receber o salário de um funcionário e 
    a sua senioridade atual (junior, pleno ou senior). A função terá que 
    aplicar um bonus conforme a senioridade: junior = R$ 50, pleno = R$100, senior R$1000. 
    A função deve retornar o valor do salário já com o bônus embutido.

    1. Entradas
        - salário
        - senioridade

    2. Regras
        - senioridade pode ser senior, junior ou pleno
        - salário é um decimal

    3. Processamento
        - se for junior, salário +50
        - se for pleno,  salário +100
        - se for senior, salário +1000

    4. Saídas
        - novo salário

        --------------------------------------------------

    Preciso de uma função que seja capaz de peritir que o usuário venda 
    dias de suas férias, basicamente os dias de férias são calculados com 
    base no valor bruto do salário mensal(sempre contado como 30).Logo um 
    funcionário que ganha 3000 por mês e quer vender um dia de férias vai 
    receber 100 reais pela venda.

     1. Entradas
        - dias de férias a vender
        - salario 

    2. Regras
        - Limite dias para vender: 30 dias

    3. Processamento
        - salario/30 *numero de dias

    4. Saídas
        - valor que vai receber pela venda dos dias
*/

import {describe, it} from 'mocha';
import assert from 'node:assert';
import { adicionarBonusPorSenioridade, calcularValorDeVendaDeDiasDeFerias } from '../src/calculosTrabalhistas.js';


describe('Calculos trabalhistas', function(){
    describe('Teste da adição de Bonus por senioridade ', function(){
        it('verifica cálculo de salario de analista Junior', function(){
            //Arrange (Dado que, Pré condições)
            const senioridade = 'junior'
            const salario = 4200;

            //Act (Quando, Ações)
            const novo_salario = adicionarBonusPorSenioridade(salario,senioridade);
            
            //Assert (Então, Pós-condições)
            assert.equal(novo_salario,4250);
            
        });

        it('verifica cálculo de salario de analista Pleno', function(){
           //Arrange (Dado que, Pré condições)
            const senioridade = 'pleno'
            const salario = 8500;
            
            //Act (Quando, Ações)
            const novo_salario = adicionarBonusPorSenioridade(salario,senioridade);
            //Assert (Então, Pós-condições
            assert.equal(novo_salario,8600);
        });

        it('verifica cálculo de salario de analista Junior', function(){
           //Arrange (Dado que, Pré condições)
            const senioridade = 'senior'
            const salario = 12000;
            
            //Act (Quando, Ações)
            const novo_salario = adicionarBonusPorSenioridade(salario,senioridade);
          
            //Assert (Então, Pós-condições 
            assert.equal(novo_salario,13000);
        });
    });

    describe('Teste do valor a receber por dias de ferias', function(){
        it('verifica cálculo do valor a receber por 30 dias de férias', function(){
            assert.equal(3000, calcularValorDeVendaDeDiasDeFerias(3000,30));
        });

        it('validar queum erro é lançado quando informo zero dias a vender', function(){
            const salarioMensal = 3000;
            const diasAVender = 0;

            // Act & Assert
            assert.throws(
                function() {calcularValorDeVendaDeDiasDeFerias(salarioMensal,diasAVender)}, 
                {message:'Dias devem estar entre 1 e 30.'}
            );
            
        });

    });
});    

