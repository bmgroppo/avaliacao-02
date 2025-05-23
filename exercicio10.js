function multiplo() {
    let inicio = Number(prompt("Digite o número inicial:"));
    let fim = Number(prompt("Digite o número final:"));

    if (isNaN(inicio) || isNaN(fim) || inicio > fim) {
        document.writeln("Por favor, insira números válidos, garantindo que o início seja menor que o fim!");
        return;
    }

    let resultado = ""; // Variável para armazenar os números que atendem à condição

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0 && i % 3 === 0) { 
            resultado += i + " ";
        }
    }

    if (resultado) {
        document.writeln(`Os números que são pares e múltiplos de 3 entre ${inicio} e ${fim} são: ${resultado}`);
    } else {
        document.writeln("Nenhum número dentro do intervalo atende à condição!");
    }
}
