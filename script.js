const nomes = [];

function adicionarComponente() {
  const input = document.getElementById("nomeInput");
  const nome = input.value.trim();

  if (nome !== "") {
    nomes.push(nome);
    input.value = "";
    atualizarLista();
  }
}

function atualizarLista() {
  const lista = document.getElementById("listacomponentes");
  lista.innerHTML = "";

  nomes.forEach((nome, index) => {
    const item = document.createElement("li");
    item.textContent = `${index + 1}. ${nome}`;
    lista.appendChild(item);
  });
}
