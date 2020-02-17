
function addItemLista(){
	var item = document.getElementById('item').value,
		listaItem = document.getElementById('lista'),
		liItem = document.createElement("li"),
		textoItem = document.createTextNode(item);
		liItem.appendChild(textoItem);
		listaItem.appendChild(liItem);
}