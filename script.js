 // Crie um array que receba 5 itens e exiba no console.
let dados = ['Taíse', 'Verônica', 'Ronaldo', 'Sophia', 'Dara'];
console.log(dados)
// Utilize um método para adicionar um nome ao inicio do array.
dados.unshift('Duda');
console.log(dados)
// Utilize um método para remover o último nome do array.
dados.pop();
console.log(dados)
// Utilize um método para adicionar dois nomes ao fim do array.
dados.push('Sasha', 'Snoopy');
console.log(dados)

// Utilize um método para remover o primeiro nome do array.
dados.shift();
console.log(dados)

// Utilize um método para organizar em ordem crescente o seguinte array:
 let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort(function(a,z){
    return a-z
})

console.log(numbers)
