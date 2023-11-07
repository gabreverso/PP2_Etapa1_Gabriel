function verificarFormulario() {
    var nome = document.getElementById("nome").value; // Exemplo: Obtendo o valor do campo nome
    var checkbox = document.querySelectorAll('input[type="checkbox"]:checked').length; // Exemplo: Verificando checkboxes

    var mensagemErro = document.getElementById("mensagemErro");
    mensagemErro.innerHTML = ""; // Limpar mensagens de erro

    if (nome === "") {
        mensagemErro.innerHTML += "Nome não pode estar vazio.<br>";
    }

    if (checkbox < 2) {
        mensagemErro.innerHTML += "Selecione pelo menos 2 opções de checkbox.<br>";
    }

    // Outras verificações necessárias para os campos do formulário

    if (mensagemErro.innerHTML === "") {
        // Se não houver erros, exibir os dados preenchidos
        exibirDadosPreenchidos();
    }
}

function exibirDadosPreenchidos() {
    var formulario = document.getElementById("formulario");
    formulario.innerHTML = "<h2>Dados Preenchidos</h2>";
    // Exibir dados preenchidos de forma organizada
    // Adicionar botões para limpar, alterar e enviar o formulário
}
