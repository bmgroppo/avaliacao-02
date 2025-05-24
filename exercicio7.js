// Questão 7 – Verificação de Número Primo 
// Função: verificarPrimo() 
// Descrição: Peça um número inteiro. Verifique se é primo e mostre uma mensagem com document.write(). 
function verificarPrimo() {
    let numero = Number(prompt("Digite um número inteiro para verificar se é primo:"));
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