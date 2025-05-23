
function verificarPrimo() {
    let numero = Number(prompt("Digite um número inteiro para verificar se é primo:"));

    if (isNaN(numero) || numero < 2) {
        document.writeln("Por favor, insira um número inteiro maior ou igual a 2!");
        return;
    }

    let Primo = true;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            Primo = false;
            break;
        }
    }

    if (Primo===true) {
        document.writeln(`O número ${numero} é primo SIM.`);
    } else {
        document.writeln(`O número ${numero} NÃO é primo NÃO.`);
    }
}