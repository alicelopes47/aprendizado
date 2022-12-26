const nota = 3
 
let resultado 
if (
    nota >= 7 && nota <= 8.9
) { 
    resultado = 'B'
} else if ( nota >= 9.0 && nota <= 10) {
    resultado = 'A'
} else if (nota >= 5 && nota <= 6.9) {
    resultado = 'C'
} else {
    resultado = 'D'
}

console.log(resultado)