/*para criar uma variavel precisamos colocar var e depois o identificador(escolher boms nomes)
depois usamos o igual para definir um valor (seja um numero ou uma string, etc*/
let preco = 19.90
let desconto = 0.4

//calcular o preço com desconto
console.log(preco* (1 - desconto));

//podemos ja definir a variavel do desconto por exempplo
var precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto)

//se tivermos uma variavel que seja um texto, podemos criar uma categoria
let nome = "Caderno"
let categoria = "papelaria"
console.log("Produto:" + " " + nome + ", " 
+ "Categoria:" + " " + categoria, ", Preço: " + preco
+ ", Desconto " + desconto)
//podemos somar tudo, etc
//string é uma sequencia de simbolos (texto)
//mais usa a concatenação
console.log("2" + 1) //não vai somar, vai concatenar, pois o dois ta como ta como uma string