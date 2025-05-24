// Questão 4 – Soma de Pares com while 
// Função: somaParesWhile() 
// Descrição: Peça um número limite e some todos os pares de 1 até ele usando while. Mostre a soma com document.write().
function somaParesWhile() {
    let limite = Number(prompt("Digite um número limite para somar todos os pares no intervalo:"));
    let soma = 0;
    let par = 2;

    while (par <= limite) {
        soma = soma + par;
        par = par + 2;
    }

    document.writeln(`A soma de todos os números pares até ${limite} é: ${soma}`);
}
