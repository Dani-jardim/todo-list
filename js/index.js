
function addItemLista(){
	var item = document.getElementById('item').value,
		listaItem = document.getElementById('lista'),
		liItem = document.createElement("li"),
		textoItem = document.createTextNode(item);
		liItem.appendChild(textoItem);
		listaItem.appendChild(liItem);
}



function feitoItem(){
var descendentes = document.querySelectorAll("#lista li");
for (var i = 0; i < descendentes.length; i++) {
	var atribuir = document.createAttribute("class");
    descendentes[i].addEventListener("click", function (e) {
			this.setAttributeNode(atribuir);
        console.log('O elemento clicado foi o ' + this.innerHTML);
    })
}
}


