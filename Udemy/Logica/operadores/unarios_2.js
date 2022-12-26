let a = 1;
let b = 2;

console.log(++a === b++); //porque é verdadeiro?
//prioridade na execução

//a maior precedência (primeiro a ser executado é o prefix)
//primeiro é lido o ++a (que fica dois), depois é lido a igualdade
//e o codigo executa, depois o b++ é executado.

console.log(a === b);