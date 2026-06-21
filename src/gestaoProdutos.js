const produtos =[
    {
        nome: 'iphone17',
        preco: '12000'
    },
    {
        nome: 'Macbook m2',
        preco: '9000'
    },
    {
        nome:'airpod',
        preco: '4000'
    }
];

for (let i=0;i<produtos.length;i++){
    console.log('-------------------')
    console.log(produtos.at(i).nome)
    console.log(produtos.at(i).preco)
    
}
console.log('-------------------')
