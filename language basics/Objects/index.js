var estudant = {
  data: {
    nome: 'Fernando',
    idade: 45,
    job: 'Desenvolvedor'
  }
}

console.log(estudant.data)

// var anotherPerson = new Object()

// anotherPerson.nome = 'lucas'
// anotherPerson.idade = 34

// console.log(anotherPerson)

var anotherPerson = Object.create(null)
anotherPerson.nome = 'lucas'

console.log(anotherPerson)
