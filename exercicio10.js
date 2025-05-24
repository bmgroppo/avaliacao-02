// Questão 10 – Verificação de múltiplos critérios com for e operadores lógicos 
// Peça ao usuário um número inicial e um número final. Use um laço for para percorrer esse intervalo e: 
// Exibir apenas os números que sejam pares e múltiplos de 3 ao mesmo tempo. 
// Exiba uma mensagem se nenhum número satisfizer a condição. 
// Utilize os operadores lógicos (&&, ||) para aplicar a regra. 
// Exemplo: Se o usuário informar início = 1 e fim = 15, o script deve exibir: 
// 6 e 12 (são pares e múltiplos de 3).
function multiplo() {
    let inicio = Number(prompt("Digite o número inicial:"));
    let fim = Number(prompt("Digite o número final:"));
    let resultado = "";

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0 && i % 3 === 0) { 
            resultado += i + " ";
        }
    }

    if (resultado !=="") {
        document.writeln(`Os números que são pares e múltiplos de 3 (ao mesmo tempo) entre ${inicio} e ${fim} são: ${resultado}`);
    } else {
        document.writeln("Nenhum número dentro do intervalo atende à condição!");
    }
}
