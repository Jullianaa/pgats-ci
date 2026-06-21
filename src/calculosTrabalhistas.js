export function adicionarBonusPorSenioridade(salario, senioridade){

    if(senioridade == 'junior'){
        return salario + 50;
    }else if (senioridade == 'pleno'){
        return salario +100;
    }else if (senioridade == 'senior'){
        return salario +1000;
    }
   
} 

export function calcularValorDeVendaDeDiasDeFerias(salarioMensal,diasAVender){
    if(diasAVender < 1 || diasAVender > 30){
        throw new Error('Dias devem estar entre 1 e 30.');
    }

    const salarioDiario =  salarioMensal/30;
    return salarioDiario * diasAVender;
}
