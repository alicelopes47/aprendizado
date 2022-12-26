let temDinheiroNaConta = false;
let estaEnsolarado = false;
let CarroGaragem = false

let SairHoje = "vai pro shopping? "
SairHoje += temDinheiroNaConta && estaEnsolarado; //resultado com E
console.log(SairHoje)

SairHoje = "vai pro shopping? "
SairHoje += estaEnsolarado || CarroGaragem //resultado com OU
console.log(SairHoje)

//ou exclusivo (dois verdadeiros da falso) simbolo !=
//operador uninario = muda o true ou false 


