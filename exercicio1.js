
function calculadoraAvancada() {
    let operacao = prompt("Digite a operação desejada: Soma (+), Subtração (-), Multiplicação (*), Divisão (/), Resto da Divisão (%), Potênciação (**):");
    let num1 = parseInt(Number(prompt("Digite o primeiro número:")));
    let num2 = parseInt(Number(prompt("Digite o segundo número:")));

    if (isNaN(num1) || isNaN(num2)) {
        document.writeln("Por favor, insira apenas números válidos!");
        return;
    }

    let resultado;

    if (operacao === "+") {
        resultado = num1 + num2;
    } else if (operacao === "-") {
        resultado = num1 - num2;
    } else if (operacao === "*") {
        resultado = num1 * num2;
    } else if (operacao === "/") {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            document.writeln("Erro: divisão por zero!");
            return;
        }
    } else if (operacao === "%") {
        resultado = num1 % num2;
    } else if (operacao === "**") {
        resultado = num1 ** num2;
    } else {
        document.writeln("Operação inválida!");
        return;
    }

    document.writeln(`O resultado da operação é: ${resultado}`);
}