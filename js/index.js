var inputItem = document.getElementById("input_item");
var ListaCompleta = document.getElementById("lista_completa");
var arrayItens = [];
var contador = 0;

function addItem(){

	var textoItem = inputItem.value;
	var li = document.createElement("li");

	if (textoItem === ""){
		alert("Digite uma tarefa");
		return false;
	}

	 li.appendChild(document.createTextNode(textoItem));
	 ListaCompleta.appendChild(li);
	 li.setAttribute("id", "lista" + contador);
	 arrayItens.push(inputItem.value);
	 contador = contador + 1;

	console.log(arrayItens);

  document.getElementById("input_item").value = "";	//apagando a linha dentro ddo input
	 
	 var btn = document.createElement("button"); // add o btn X apagar em cada novo item
	 var txtBtn = document.createTextNode("X");
	 btn.className = "fechar"; // classe criada em arquivo estilos.css
	 btn.appendChild(txtBtn);
	 li.appendChild(btn);
	 
	 var btnOk = document.createElement("button"); // add o btn para item feito 
	 var txtBtnOk = document.createTextNode("feito");
	 btnOk.className = "feito"; // classe li.feito no arquivo estilos.css
	 btnOk.appendChild(txtBtnOk);
	 li.appendChild(btnOk);
 
	 var feito = document.getElementsByClassName("feito"); // add classe feito para um item feito/desfeito TOGGLE
	 for(var i=0; i< feito.length; i++){
		 feito[i].onclick = function(){
			 var div = this.parentElement;	
			 div.classList.toggle("feito");	
		 }
	 };
 
	 var fechar = document.getElementsByClassName("fechar"); //add um display none para esconder um item
	 for (var i = 0; i < fechar.length; i++) {
		 fechar[i].onclick = function() {
			 var div = this.parentElement;
			 div.style.display = "none";
		 }
	 };

	 dataLocal();
};

document.body.onkeydown = function (enter){ // add um item com a tecla ENTER
	enter = enter || window.event;
	var keyCode = enter.keyCode || enter.charCode;
	if (keyCode === 13){
		addItem();
	}
};


	function dataLocal() { // definindo chave e valor LocalStorage
		localStorage.setItem('itensSalvos', JSON.stringify(arrayItens));
	}


	function salvarLocal() { //salvando localStorage
		var getData = localStorage.getItem('itensSalvos');
		var iten2 = JSON.parse(getData);

		for (var i = 0; i < iten2.length; i++) {
				var li = document.createElement('li');
				arrayItens.push(iten2[i]);

				li.appendChild(document.createTextNode(iten2[i]));
				ListaCompleta.appendChild(li);
				li.setAttribute('id', 'lista' + i);

		}
}

window.onload = salvarLocal; // qdo carregar a página executar salvarLocal


