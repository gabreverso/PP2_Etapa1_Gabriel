var atualizacoes = document.getElementById("lista-atualizacoes").getElementsByTagName("li");
var indiceAtualizacao = 0;

function mostrarProximaAtualizacao() {
    atualizacoes[indiceAtualizacao].style.display = "none";
    indiceAtualizacao = (indiceAtualizacao + 1) % atualizacoes.length;
    atualizacoes[indiceAtualizacao].style.display = "block";
}

// Inicialmente, exiba a primeira atualização
mostrarProximaAtualizacao();

// Mude para a próxima atualização a cada 5 segundos (5000 milissegundos)
setInterval(mostrarProximaAtualizacao, 5000);
