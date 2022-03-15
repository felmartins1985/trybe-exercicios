// escreva greet abaixo
function greet(user, greeting="Hi"){
 return`${greeting}, ${user}`
}
console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'