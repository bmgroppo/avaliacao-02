// Questão 8 – Média com Entradas Ilimitadas 
// Função: mediaAritmetica() 
// Descrição: Peça números até o usuário digitar "fim". Calcule a média dos números inseridos com while. 
function mediaAritmetica() {
    let soma = 0;
    let quantidade = 0;

    while (true) {
        let entrada = prompt(`Digite quantos números quiser para calcular a média deles: \n    (digite "fim" para interromper):`);

        if (entrada.toLowerCase() === "fim") {
            break;
        }
        let numero = Number(entrada);

        soma = soma + numero;
        quantidade++;
    }

    if (quantidade > 0) {
        let media = soma / quantidade;
        document.writeln(`A média dos números inseridos é: ${media.toFixed(2)}`);
    } else {
        document.writeln("Nenhum número foi inserido!");
    }
}
