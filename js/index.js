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
		var txtBtn = document.createTextNode("X") 
		btn.className = "fechar"; // criar class depois
		btn.appendChild(txtBtn);
		ListaNode.appendChild(btn)
};