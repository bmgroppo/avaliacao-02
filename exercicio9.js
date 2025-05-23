function contadorRegressivo() {
    let numero = Number(prompt("Digite um número maior que zero para iniciar a contagem regressiva:"));

    if (isNaN(numero) || numero <= 0) {
        document.writeln("Por favor, insira um número inteiro positivo maior que zero!");
        return;
    }

    document.writeln(`<h3>Contagem regressiva a partir de ${numero}</h3>`);

    while (numero >= 0) {
        document.writeln(`${numero} <br>`);
        numero--; 
    }
}
