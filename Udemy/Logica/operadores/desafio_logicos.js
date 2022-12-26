//Duas expressões resultar em TRUE (Aritmeticos/Relacionais/Lógicos)
let true1 = ((5 + 5 == 10) && (6 / 2 > 1));
console.log(true1);

let true2 = ((10 - 3 < (1.3 * 2)) != ((150*2) > 70 - 3));
console.log(true2);

//Duas expressões resultar em FALSE (Aritmeticos/Relacionais/Lógicos)
let false1 = (!(5*5 > 2) == (10/2) >= 5);
console.log(false1);

let false2 = ((10/2 < 8/4) || (2,3 * 3 > 10));
console.log(false2);

//ou 
console.log(!true1, !true2);
