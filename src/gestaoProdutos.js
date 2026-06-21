
const produtos = [
    {
        nome: 'Trackinas',
        preco: '1.49',
        estoque: 50
    },
    {
        nome: 'ps4',
        preco: '3999.99',
        estooque: 25  
    },
    {
        nome: 'MacBook',
        preco: '21490.00',
        estoque: 5,
        cores: ['cinza espacial','cinza']  
    }
];

//console.log(produtos[2].cores[1])
//console.log(produtos[2].nome)
produtos[2].nome = 'MacBook Pro M5';
//console.log(produtos[2].nome)


export function pegarNomeDoProduto(indice){
    return produtos[indice].nome
}
