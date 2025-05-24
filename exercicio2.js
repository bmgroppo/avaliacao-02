// Questão 2 – Classificação Etária 
// Função: classificarIdade() 
// Descrição: Peça a idade do usuário e classifique em: 
// • Até 12: Criança 
// • 13 a 17: Adolescente 
// • 18 a 59: Adulto 
// • 60 ou mais: Idoso 
function classificarIdade() {
    let idade = Number(prompt("Digite sua idade:"));


    if (idade <= 12) {
        document.writeln(`Você é uma Criança de ${idade} anos.`);
    } else if (idade <= 17) {
        document.writeln(`Você é um Adolescente de ${idade} anos.`);
    } else if (idade <= 59) {
        document.writeln(`Você é um Adulto de ${idade} anos.`);
    } else {
        document.writeln(`Você é um Idoso de ${idade} anos.`);
    }
}
