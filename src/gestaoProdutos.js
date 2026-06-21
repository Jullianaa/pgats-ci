onst produtos = [
    {
        nome: 'Trackinas',
        preco: 1.49,
        estoque: 50
    },
    {
        nome: 'ps4',
        preco: 3999.99,
        estoque: 25  
    },
    {
        nome: 'MacBook',
        preco: 21490.00,
        estoque: 5,
        cores: ['cinza espacial', 'cinza']  
    }
];

// Atualização de nome
produtos[2].nome = 'MacBook Pro M5';

/**
 * Retorna o nome do produto pelo índice
 * @param {number} indice
 * @returns {string | undefined}
 */
export function pegarNomeDoProduto(indice) {
    return produtos[indice]?.nome;
}
