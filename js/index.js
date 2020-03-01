function novoItem (){

	var ListaNode = document.createElement("li");
	var inputItem = document.getElementById("itemLista").value;
	var textoInput = document.createTextNode(inputItem);
	ListaNode.appendChild(textoInput);
	if(inputItem === ""){
		alert("Voce precisa digitar uma tarefa");
	} 
	else{
		document.getElementById("listaCompleta").appendChild(ListaNode);
	}
	document.getElementById("itemLista").value = "";	//apagando a linha do input

	var btn = document.createElement("button"); // add o btn para apagar em cada novo item
	var txtBtn = document.createTextNode("X");
	btn.className = "fechar"; // criar class depois
	btn.appendChild(txtBtn);
	ListaNode.appendChild(btn);
	
	var btnOk = document.createElement("button"); // add o btn para apagar em cada novo item
	var txtBtnOk = document.createTextNode("feito");
	btnOk.className = "feito";
	btnOk.appendChild(txtBtnOk);
	ListaNode.appendChild(btnOk);

	var feito = document.getElementsByClassName("feito"); // add classe feito para um item feito/desfeito
	for(var i=0; i< feito.length; i++){
		feito[i].onclick = function(){
			var div = this.parentElement;	
			div.classList.toggle("feito");	
		}
	}

	var fechar = document.getElementsByClassName("fechar"); //add um display nome para esconder um item
	for (var i = 0; i < fechar.length; i++) {
		fechar[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	};

	
if(localStorage.itemLista){
	document.getElementById("itemLista").value.localStorage.itemLista;
}

var salvarDados = function(){

	var itemLista = document.getElementById("itemLista").value;


	localStorage.setItem("itemLista", itemLista);

};

console.log(listaCompleta);

document.onchange = salvarDados;
};
