var listarFilmes = [
    "https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2019/11/Topo-floripa.jpg",
  
  "https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2019/11/Praia-Brava.jpg",
  
  "https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2019/11/Praia-de-Lagoinha.jpg"
  ];
  
  for (var i = 0; i < listarFilmes.length; i++) {
    document.write("br" + "<img src=" + listarFilmes[i] + ">");
  }