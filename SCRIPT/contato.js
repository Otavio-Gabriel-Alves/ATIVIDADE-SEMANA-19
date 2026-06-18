function mostrarMensagem(event) {
    event.preventDefault();

    const nome = document.getElementById("ipNome").value;
    const email = document.getElementById("ipEmail").value;
    const telefone = document.getElementById("ipTel").value;
    const mensagem = document.getElementById("aMensagem").value;
    const campoData = document.getElementById("dataNasc").value;
    const motivoSelect = document.getElementById("slMotivo");
    const motivoSelecionado = motivoSelect.options[motivoSelect.selectedIndex].text;

    const partes = campoData.split("-");
    const data = new Date(partes[0], partes[1] - 1, partes[2]);
    const dataNascimentoFormatada = data.toLocaleDateString("pt-BR");

    document.getElementById("resposta").textContent = `Olá, ${nome}! Confira seus dados:`;
    document.getElementById("nomeExibido").innerHTML = "<strong>Nome:</strong> " + nome;
    document.getElementById("emailExibido").innerHTML = "<strong>E-mail:</strong> " + email;
    document.getElementById("telExibido").innerHTML = "<strong>Telefone:</strong> " + telefone;
    document.getElementById("dataExibida").innerHTML = "<strong>Data de Nascimento:</strong> " + dataNascimentoFormatada;
    document.getElementById("motivoExibido").innerHTML = "<strong>Onde nos conheceu:</strong> " + motivoSelecionado;
    document.getElementById("mensagemExibida").innerHTML = "<strong>Mensagem:</strong> " + mensagem;

    document.getElementById("resultado").classList.add("ativo");
    document.getElementById("resultado").scrollIntoView({ behavior: "smooth" });
}
