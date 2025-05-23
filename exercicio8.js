function mediaAritmetica() {
    let soma = 0;
    let quantidade = 0;

    while (true) {
        let entrada = prompt(`Digite quantos números quiser para calcular a média deles: \n(digite "fim" para interromper):`);

        if (entrada.toLowerCase() === "fim") {
            break;
        }

        let numero = Number(entrada);

        if (isNaN(numero)) {
            document.writeln("Por favor, insira apenas números válidos!");
            continue;
        }

        soma += numero;
        quantidade++;
    }

    if (quantidade > 0) {
        let media = soma / quantidade;
        document.writeln(`A média dos números inseridos é: ${media.toFixed(2)}`);
    } else {
        document.writeln("Nenhum número foi inserido!");
    }
}


// ✔ Loop infinito (while true) → O usuário pode inserir números até digitar "fim".
