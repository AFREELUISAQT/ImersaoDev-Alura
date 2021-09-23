var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");

  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Vocé acertou! e numero é: " + numeroSecreto;
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Vocé deve digitar um número de 0 a 10!";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "Você errou! O número Secreto e maior ao Digitado!";
  } else {
    elementoResultado.innerHTML =
      "Você errou! O número Secreto e menor ao Digitado!";
  }
}