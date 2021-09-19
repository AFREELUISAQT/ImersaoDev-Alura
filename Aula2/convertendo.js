function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
  
    var valorEmUS = valorEmRealNumerico / 5;
    var valorEmBs = valorEmRealNumerico * 785467;
    var valorEmBtc = valorEmRealNumerico * 0.000004;
    var btcFixado = valorEmBtc.toFixed(6);
  
    var elementoValorConvertidoEmDolar = document.getElementById(
      "valorConvertidoEmDolar"
    );
    var valorConvertidoEmDolar = "O resultado em Dolar é US$ " + valorEmUS;
    elementoValorConvertidoEmDolar.innerHTML = valorConvertidoEmDolar;
  
    var elementoValorConvertidoEmBs = document.getElementById(
      "valorConvertidoEmBs"
    );
    var valorConvertidoEmBs = "O resultado em Bolívares é BsVE " + valorEmBs;
    elementoValorConvertidoEmBs.innerHTML = valorConvertidoEmBs;
  
    var elementoValorConvertidoEmBtc = document.getElementById(
      "valorConvertidoEmBtc"
    );
    var valorConvertidoEmBtc = "O resultado em Bitcoins é btc " + btcFixado;
    elementoValorConvertidoEmBtc.innerHTML = valorConvertidoEmBtc;
  }