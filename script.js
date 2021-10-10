var linkProjetos = [
	{
		linkProjeto: "https://codepen.io/afreeluisaqt/pen/VwWQaOE",
		title: "Calculadora de Média",
		like: 0,
	},
	{
		linkProjeto: "https://codepen.io/afreeluisaqt/pen/XWgEqrY",
		title: "Conversor de Moedas",
		like: 0,
	},
	{
		linkProjeto: "https://codepen.io/afreeluisaqt/pen/eYRMLEP",
		title: "Mentalista",
		like: 0,
	},
	{
		linkProjeto: "https://codepen.io/afreeluisaqt/pen/NWgBBRO",
		title: "Alura Verão",
		like: 0,
	},
	{
		linkProjeto: "https://codepen.io/afreeluisaqt/pen/oNwMPWM",
		title: "Alura Flix",
		like: 0,
	},
	{
		linkProjeto: "https://codepen.io/afreeluisaqt/pen/ExXeQbO",
		title: "Tabela de Classificação",
		like: 0,
	},
	{
		linkProjeto: "https://codepen.io/afreeluisaqt/pen/PojyJoM",
		title: "Super Trunfo",
		like: 0,
	},
	{
		linkProjeto: "https://codepen.io/afreeluisaqt/pen/jOweGYm",
		title: "Super Trunfo RELOAD",
		like: 0,
	},
];

function Projetos() {
	var elementProjetos = document.getElementById("projetos");
	var elemento = "";
	console.log(linkProjetos.length);

	for (let i = 0; i < linkProjetos.length; i++) {
		const projeto = linkProjetos[i];

		elemento += '<div class="container-projeto">';
		elemento += '<a href="' + projeto.linkProjeto + '" target="_blanck">';

		elemento += "<div>";

		elemento += "<h1>" + projeto.title + "</h1>";

		elemento += "</div>";
		elemento += "</a>";
		elemento += '<div class="like" onclick="like(' + i + ')">';
		elemento += '<i class="far fa-heart"></i>';
		elemento += '<p id="like' + i + '">' + projeto.like + "</p>";
		elemento += "</div>";
		elemento += "</div>";
	}

	elementProjetos.innerHTML = elemento;
}

function like(i) {
	document.getElementById("like" + i).innerHTML = linkProjetos[i].like += 1;
}

function mudaTema() {
	var elementButton = document.getElementById("clear");
	document.body.classList.toggle("clear");

	if (document.body.classList == "clear") {
		elementButton.innerHTML = "Trocar Tema";
	} else {
		elementButton.innerHTML = "Trocar Tema";
	}
}
