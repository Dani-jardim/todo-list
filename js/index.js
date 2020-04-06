// if (data){
// 	localStorage.getItem("todoList");
// }else{
// 	JSON.parse(localStorage.getItem("todoList"));
// }



// var data =  {  //criando array de objetos com a lista e item completo
// 	lista : [],
// 	completo : []
// };



var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{
  lista: [],
  completo: []
};






document.getElementById("adicionar").addEventListener("click", function(){ // ouvir o click e pegar o input
	var value = document.getElementById("item").value;
	if(value){
		adicionarItem(value);
		document.getElementById("item").value = " "; // zerar o valor do input

		data.lista.push(value); // add valor em um array
		atualizarData()
	}

});

function adicionarItem (value) {
  adicionarItemDom(value);
  document.getElementById('item').value = '';

  data.lista.push(value);
  atualizarData();
}

carregarLista();

function carregarLista(){
	if (!data.lista.length && !data.completo.length)
	return;

	for(var i = 0; i < data.lista.length; i++){
		var value = data.lista[i];
		adicionarItemDom(value);
	};
	for(var j = 0; j < data.completo.length; j++ ){
		var value = data.completo[j];
		adicionarItemDom(value, true);

	}

};

function atualizarData(){
	localStorage.setItem("todoList", JSON.stringify(data));

}


function removerItem() {
  var item = this.parentNode.parentNode;
	var irmao = item.parentNode;
	var id = irmao.id;
	var vIndex = item.innerText;

	if(id === "todo"){
		data.lista.splice(data.lista.indexOf(vIndex), 1);
	}else{
		data.completo.splice(data.lista.indexOf(vIndex), 1);

	};
	
	irmao.removeChild(item);
	atualizarData();
}

function ItemCompleto(){
	var item = this.parentNode.parentNode;
	var irmao = item.parentNode;
	var id = irmao.id;

	var vIndex = item.innerText; 

	if(id === "lista"){
		//indexOf() retorna o primeiro índice em que o elemento pode ser encontrado
		data.lista.splice(data.lista.indexOf(vIndex), 1); // valor lista de arrays
		data.completo.push(vIndex);
	}else{
		data.completo.splice(data.completo.indexOf(vIndex), 1); // valor lista de arrays
		data.lista.push(vIndex);
	};
	atualizarData();

	var target;

	if (id === "lista"){
		target = document.getElementById("item_completo");
	}else{
		target = document.getElementById ("lista");
	};
	irmao.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}


function adicionarItemDom(texto, completo){
	var lista = (completo) ? document.getElementById("item_completo") : document.getElementById("lista");

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
