function validaSenha() {
    let senhaCorreta = "senai123";
    let tentativas = 3;
    let mensagem;

    while (tentativas > 0) {
        let senhaUsuario = prompt(`Digite a senha (${tentativas} tentativa(s) restante(s)):`);

        if (senhaUsuario === senhaCorreta) {
            mensagem = ("Acesso permitido!");
            break
        } 
        tentativas--;

        if (tentativas > 0) {
            mensagem = ("Senha incorreta! Tente novamente.");
        } else {
            mensagem = ("Acesso negado! Você excedeu o número de tentativas.");                
            }
        }
        document.writeln(mensagem);
    }

