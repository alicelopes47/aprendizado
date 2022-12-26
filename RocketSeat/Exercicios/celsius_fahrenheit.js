let temperatura = 30
let tipagem = "C"
if (tipagem.includes('C')) {
    temperatura *= 9/5
    temperatura += 32
    console.log(temperatura + " em graus fahrenheit")

} else if (tipagem.includes('F')) { 
    temperatura -= 32
    temperatura *= 5/9
    console.log(temperatura + " em graus celsius")
} else { 
    console.log('Grau nao identificado')
}