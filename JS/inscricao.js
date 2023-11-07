function validarInscricao() {
    var nomeCompleto = document.getElementById("nomeCompleto").value;
    var telefone = document.getElementById("telefone").value;
    var endereco = document.getElementById("endereco").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;
    var rg = document.getElementById("rg").value;
    var nomePai = document.getElementById("nomePai").value;
    var nomeMae = document.getElementById("nomeMae").value;
    var paiAusente = document.getElementById("paiAusente").checked;
    var cadunico = document.getElementById("cadunico").checked;
    var programaSocial = document.getElementById("programaSocial").checked;
    var cor = document.getElementById("cor").value;
    var escolaPublica = document.getElementById("escolaPublica").checked;

    if (
        nomeCompleto && telefone && endereco && email && cpf && rg && nomePai && nomeMae &&
        cor && (paiAusente || !paiAusente) && (cadunico || !cadunico) && (programaSocial || !programaSocial) &&
        (escolaPublica || !escolaPublica)
    ) {
        alert("Inscrição realizada com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
    
}
