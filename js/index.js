
document.getElementById("adicionar").addEventListener("click", function(){
	var value = document.getElementById("item").value;
	if(value){
		adicionarItem(value);
		document.getElementById("item").value = " "; // zerar o valor do input
	}

});

function removerItem() {
  var item = this.parentNode.parentNode;
	var irmao = item.parentNode;
	
	irmao.removeChild(item);
}

function ItemCompleto(){
	var item = this.parentNode.parentNode;
	var irmao = item.parentNode;
	var id = irmao.id;

	var target;

	if (id === "lista"){
		target = document.getElementById("item_completo");
	}else{
		target = document.getElementById ("lista");

	}
	irmao.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}


function adicionarItem(texto){
	var lista = document.getElementById("lista");

	var item = document.createElement("li");
	item.innerText = texto;
	
	//criando botoes
	var botoes = document.createElement("div"); 
	botoes.classList.add("botoes");

	// estados dos botoes
	var deletar = document.createElement("button"); // botao deletar
	deletar.classList.add("deletar_item") // criar css disso 
	deletar.innerText = "X";
	document.body.appendChild(deletar);

	//remover item
	deletar.addEventListener('click', removerItem);

	var completo = document.createElement("button"); // botao item completo
	completo.classList.add("item_completo")
	completo.innerText = "Ok"
	document.body.appendChild(completo);
	
	// ouvir o botao item completo
	completo.addEventListener('click', ItemCompleto);

	botoes.appendChild(deletar);
	botoes.appendChild(completo);
	item.appendChild(botoes);

	lista.insertBefore(item, lista.childNodes[0]); // fazer a lista ordenar do mais recente para o mais antigo
};
