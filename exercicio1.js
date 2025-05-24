// Questão 1 – Calculadora Avançada 
// Função: calculadoraAvancada() 
// Descrição:  Peça dois números e a operação desejada (+, -, *, /, %, **). Use if/else para realizar a operação. Mostre o resultado com 
// document.write(). 
function calculadoraAvancada() {
    let operacao = prompt("Digite a operação desejada: Soma (+), Subtração (-), Multiplicação (*), Divisão (/), Resto da Divisão (%), Potênciação (**):");
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    let resultado;

    if (operacao === "+") {
        resultado = num1 + num2;
    } else if (operacao === "-") {
        resultado = num1 - num2;
    } else if (operacao === "*") {
        resultado = num1 * num2;
    } else if (operacao === "/") {
        resultado = num1 / num2;
    } else if (operacao === "%") {
        resultado = num1 % num2;
    } else if (operacao === "**"){
        resultado = num1 ** num2;
    } else {
        document.writeln("Operação inválida!");
    }
    document.writeln(`O resultado da operação é: ${resultado}`);
}