function calcularFatorial() {
    let fatorial = 1;
    let numeroInformado = Number(prompt("Digite um número inteiro positivo para calcular o fatorial:"));

    if (isNaN(numeroInformado) || numeroInformado < 0) {
        document.writeln("Por favor, insira um número inteiro positivo válido!");
        return;
    }
 
    for (let i = 1; i <= numeroInformado; i++) {
        fatorial *= i;
    }

    document.writeln(`O fatorial de ${numeroInformado} é: ${fatorial}`);
}
