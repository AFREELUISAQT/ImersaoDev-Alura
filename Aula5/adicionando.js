function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.error("Endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  console.log(filme);
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

function apagarFilme() {
  document.getElementById("listaFilmes").innerHTML = "";
}

//https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2019/11/Praia-de-Lagoinha.jpg