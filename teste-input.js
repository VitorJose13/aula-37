const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

var nome;
readline.question(`Escreva o nome: `, name => {
    nome = name;
    //console.log(`Hi ${name}!`);
    readline.close();
});

console.log(" Meu nome:",nome)
