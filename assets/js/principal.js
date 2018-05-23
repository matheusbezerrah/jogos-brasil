$(document).ready(function(){
	var painel = $("#painel-info");
	
	var divBloco = document.createElement("div");
	divBloco.classList.add("col-sm-3");

	var divPainelJogo = document.createElement("div");
	divPainelJogo.classList.add("well");
	divPainelJogo.classList.add("well-lg");
	divPainelJogo.classList.add("painel-jogo");
	divBloco.append(divPainelJogo);

	/***************************
	** ROW IMGS SELEÇÕES
	****************************/
	var divRowSel = criaDivRow();
	divPainelJogo.append(divRowSel);

	// TIME 1
	var divTime1 = document.createElement("div");
	divTime1.classList.add("col-md-4");

	var imgTime1 = document.createElement("img");
	imgTime1.classList.add("logo-time");
	imgTime1.classList.add("img-responsive");
	imgTime1.classList.add("img-rounded");

	divTime1.append(imgTime1);
	divRowSel.append(divTime1);

	// X
	var divX = document.createElement("div");
	divX.classList.add("col-md-4");

	var spanX = document.createElement("span");
	spanX.classList.add("glyphicon");
	spanX.classList.add("glyphicon-remove");

	divX.append(spanX);
	divRowSel.append(divX);

	// TIME 2
	var divTime2 = document.createElement("div");
	divTime2.classList.add("col-md-4");

	var imgTime2 = document.createElement("img");
	imgTime2.classList.add("logo-time");
	imgTime2.classList.add("img-responsive");
	imgTime2.classList.add("img-rounded");

	divTime2.append(imgTime2);
	divRowSel.append(divTime2);

	/***************************
	** ROW DESC SELEÇÕES
	****************************/
	var divRowDescSel = criaDivRow();

	var divDescTime1 = document.createElement("div");
	divDescTime1.classList.add("col-md-6");
	divDescTime1.classList.add("descricao-selecao-casa");
	divDescTime1.classList.add("descricao-selecao");

	var divDescTime2 = document.createElement("div");
	divDescTime2.classList.add("col-md-6");
	divDescTime2.classList.add("descricao-selecao-casa");
	divDescTime2.classList.add("descricao-selecao");

	divRowDescSel.append(divDescTime1);
	divRowDescSel.append(divDescTime2);

	divPainelJogo.append(divRowDescSel);

	/***************************
	** ROW TITULO DATA
	****************************/
	var divRowTituloData = criaDivRow();
	divRowTituloData.classList.add("row-info-titulo-data");

	var divTituloData = criaDivInfoTitulo();
	divRowTituloData.append(divTituloData);

	divPainelJogo.append(divRowTituloData);

	/***************************
	** ROW VALOR DATA
	****************************/
	var divRowValorData = criaDivRow();
	divRowValorData.append(criaDivInfoValor());
	divPainelJogo.append(divRowValorData);

	/***************************
	** ROW TITULO ESTADIO
	****************************/
	var divRowTituloEstadio = criaDivRow();

	var divTituloEstadio = criaDivInfoTitulo();
	divRowTituloEstadio.append(divTituloEstadio);

	divPainelJogo.append(divRowTituloEstadio);

	/***************************
	** ROW VALOR ESTADIO
	****************************/
	

	painel.append(divBloco);
});

function criaDivRow(){
	var divRow = document.createElement("div");
	divRow.classList.add("row");
	return divRow;
}

function criaDivInfoTitulo(){
	var divInfoTitulo = document.createElement("div");
	divInfoTitulo.classList.add("col-md-12");
	divInfoTitulo.classList.add("info-titulo");

	return divInfoTitulo;
}

function criaDivInfoValor(){
	var divInfoValor = document.createElement("div");
	divInfoValor.classList.add("col-md-12");
	divInfoValor.classList.add("info-valor");
	return divInfoValor;
}

$(".menu-option").click(function(){
	var menuTitulo = this.textContent;
	$("#titulo-painel").text(menuTitulo);
});