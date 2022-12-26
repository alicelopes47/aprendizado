let receitas = [2500, 3200, 250.43, 360.45]
var somaReceitas = 0
for (var i = 0; i < receitas.length; i++) {
    somaReceitas += receitas[i]
}


let despesas = [320.34, 128.45, 176.87, 1450.00]
var somaDespesas = 0
for (var i = 0; i < despesas.length; i++) {
    somaDespesas += despesas[i]
}
console.log(somaReceitas - somaDespesas)
if(somaReceitas - somaDespesas < 0) {
console.log('Saldo negativo')
} else {
    console.log('saldo positivo')
}