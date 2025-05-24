// Questão 3 – Tabuada com Intervalo 
// Função: tabuadaPersonalizada() 
// Descrição: Peça um número base e um número final. Mostre a tabuada do número base até o limite escolhido usando for. 

function tabuadaPersonalizada() {
    let numeroBase = Number(prompt("Digite o número base da tabuada:"));
    let numeroFinal = Number(prompt("Digite até onde deseja calcular a tabuada:"));
    let resultado = 0;

    document.writeln(`<h3>Tabuada de ${numeroBase}</h3>`);

    for (let i = 1; i <= numeroFinal; i++) {
        resultado = numeroBase * i;
        document.writeln(`${numeroBase} x ${i} = ${resultado} <br>`);
    }
    
}