var carta1 = {
    nome: "Bulbasauro",
    foto:
      "https://www.seekpng.com/png/detail/99-991786_vector-by-dashiesparkle-d-clip-freeuse-library-bulbasaur.png",
    atributos: {
      ataque: 7,
      defensa: 8,
      magia: 6
    }
  };
  
  var carta2 = {
    nome: "Darth Vader",
    foto:
      "https://imagensemoldes.com.br/wp-content/uploads/2020/06/Foto-Darth-Vader-PNG-Star-Wars-PNG-609x1024.png",
    atributos: {
      ataque: 9,
      defensa: 8,
      magia: 2
    }
  };
  
  var carta3 = {
    nome: "Chiryu do Dragão",
    foto:
      "https://www.seekpng.com/png/detail/99-991786_vector-by-dashiesparkle-d-clip-freeuse-library-bulbasaur.png",
    atributos: {
      ataque: 5,
      defensa: 9,
      magia: 10
    }
  };
  
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
  
    document.getElementById("btnJogar").disabled = false;
  
    exibirOpcoes();
    exibirFoto();
  }
  
  function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
  
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo;
    }
    opcoes.innerHTML = opcoesTexto;
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
      } else if (radioAtributos[1].defaultChecked == true) {
        console.log("no puede estar vacio!!!");
      } else {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "Você venceu";
    } else if (valorCartaMaquina > valorCartaJogador) {
      elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior";
    } else {
      elementoResultado.innerHTML = "Empatou";
    }
    console.log(cartaMaquina);
  }
  function exibirFoto() {
    var fotos = document.getElementById("foto");
    var opcoesFotos = "";
  
    for (var atributo in cartaJogador.atributos.foto) {
      opcoesFotos = "<h1>" + opcoesFotos + "</h1>";
      console.log(cartaJogador.atributos.foto);
    }
    fotos.innerHTML = opcoesFotos;
  }
  