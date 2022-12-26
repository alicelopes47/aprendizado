//qualquer numero ou texto pode ser convertido em true ou false usando o operador unario !

console.log(!true)
console.log(!false)

console.log(!"Texto") //o conteudo de uma string é naturalmente como verdadeiro
console.log(!"") //espaço vazio vai ser avaliada como falso

//sobre numeros: 
//com numeros, apenas o 0 sera convertido para falso, todos os outros numeros, ate os negativos são 
//verdadeiros.
//!! mostra o tipo que é classificado, ex:
console.log(!!0) //false
console.log(!!0.00000000000000001) //true