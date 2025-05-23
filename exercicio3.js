function tabuadaPersonalizada() {
    let numeroBase = Number(prompt("Digite o número base da tabuada:"));
    let numeroFinal = Number(prompt("Digite até onde deseja calcular a tabuada:"));

    if (isNaN(numeroBase) || isNaN(numeroFinal) || numeroFinal < 1) {
        document.writeln("Por favor, insira números válidos!");
        return;
    }

    document.writeln(`<h3>Tabuada do número ${numeroBase} até ${numeroFinal}</h3>`);

    for (let i = 1; i <= numeroFinal; i++) {
        let resultadoMultiplicacao = numeroBase * i;
        document.writeln(`${numeroBase} x ${i} = ${resultadoMultiplicacao} <br>`);
    }
}