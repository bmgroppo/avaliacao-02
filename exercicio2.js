function classificarIdade() {
    let idade = Number(prompt("Digite sua idade:"));

    if (isNaN(idade) || idade < 0) {
        document.writeln("Por favor, insira uma idade válida!");
        return;
    }

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
