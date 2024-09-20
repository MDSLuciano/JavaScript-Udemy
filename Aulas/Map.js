/*
As vezes quando estamos trablhando com o objeto, você precisa manter
uma ordem, que seja a numerica do id, assim podemos usar o map,
ele não ira fazer a alteração que quando pegamos os valor em um for por
exemplo, como por exemplo na parte abaixo que está comentada.
*/

const pessoas = [
    { id: 3, nome: 'Luciano' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' },
]

// const novasPessoas = {}
// for (const pessoa of pessoas){
//     const {id} = pessoa
//     novasPessoas[id] = { ...pessoa}
// }

const novasPessoas = new Map()
for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas.set(id, { ...pessoa })
}

console.log(novasPessoas.get(2));

for(const pessoa of novasPessoas){
    console.log(pessoa);
    
}