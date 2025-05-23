function somaParesWhile() {
    let limite = Number(prompt("Digite um número limite para somar todos os pares no intervalo:"));

    if (isNaN(limite) || limite < 1) {
        document.writeln("Por favor, insira um número válido maior que zero!");
        return;
    }

    let soma = 0;
    let numero = 2;

    while (numero <= limite) {
        soma += num;
        numero += 2;
    }

    document.writeln(`A soma de todos os números pares até ${limite} é: ${soma}`);
}
