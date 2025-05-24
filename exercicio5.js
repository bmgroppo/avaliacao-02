// Questão 5 – Validação de Senha com Tentativas 
// Função: validaSenha() 
// Descrição: Peça uma senha via prompt(). Permita até 3 tentativas. Senha correta: "senai123". Mostre "Acesso permitido" ou 
// "Acesso bloqueado". 
function validaSenha() {
    let senhaCorreta = "senai123";
    let mensagem = "Acesso negado! Você excedeu o número de tentativas.";

    for (let tentativas = 3; tentativas > 0; tentativas--) {
        let senhaUsuario = prompt("Digite a senha:");
        if (senhaUsuario === senhaCorreta) {
            mensagem = "Acesso permitido!";
            break;
        } else if (tentativas > 1) {
            alert("Senha incorreta! Tente novamente.");
        }
    }
    document.writeln(mensagem);
}

