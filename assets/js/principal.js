$(document).ready(function(){
	var painel = querySelector("#painel-info");
	var divBloco = document.createElement("div");

	painel.appendChild(document.createElement("div"));

});

$(".menu-option").click(function(){
	var menu = this.textContent;

	$("#titulo-painel").text(menu);

});
