const a = 10
const b = 28
const operacao = 'kfoskfosa'

let resultado;

if(operacao === '*'){
    resultado = a * b
} else if (operacao === '+') {
    resultado = a + b
} else if (operacao === '-') {
    resultado = a - b 
} else if (operacao === '/') {
    resultado = a / b
} else  if (operacao === '%') {
    resultado = a % b
}

console.log(resultado)