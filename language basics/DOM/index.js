var h1 = document.getElementById('h1')
var inputValue = document.getElementById('nome')
var valorEsperado = Math.floor(Math.random() * 9000) + 1000
const button = document.getElementById('button')

h1.style.background = 'red'
h1.style.padding = '13px'
h1.style.color = '#ffff'

var p = document.createElement('p')

p.textContent = 'A new paragraph'
p.style.fontSize = '17px'

var a = document.querySelector('#a')

a.appendChild(p)

button.addEventListener('click', () => {
  const valorDigitado = inputValue.value.trim()
  if (valorDigitado === '' || valorDigitado < 4) {
    h1.innerHTML = 'Por favor digite um valor de quatro digito'
    return
  }
  if (valorDigitado > 9999) {
    h1.innerHTML = 'Por favor digite um valor de quatro digito'
    return
  }

  if (valorDigitado == valorEsperado) {
    h1.innerHTML = 'Acertou'
  } else {
    let feedback = ''

    if (Math.abs(valorDigitado - valorEsperado) <= 100) {
      feedback = 'Voce esta proximo'
    } else if (valorDigitado > valorEsperado) {
      feedback = 'Muito menor'
    } else {
      feedback = 'Muito maior'
    }
    h1.innerHTML = `Tente novamente ${feedback} que o numero digitado. o valor correto era ${valorEsperado}`
  }
})
