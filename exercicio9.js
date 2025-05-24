// Questão 9 – Contador Regressivo 
// Função: contadorRegressivo() 
// Descrição: Peça um número maior que zero. Mostre contagem regressiva até 0 com while. 
function contadorRegressivo() {
    let numero = Number(prompt("Digite um número maior que zero para iniciar a contagem regressiva:"));

    document.writeln(`<h3>Contagem regressiva a partir de ${numero}</h3>`);

   for (let i = numero; i >= 0; i--){
    document.writeln(i+ "<br>")
   }
}
