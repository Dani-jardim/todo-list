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
		document.getElementById("listaCompleta").value = "";	
};