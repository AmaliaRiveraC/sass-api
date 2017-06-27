var api = {
	url: "http://laboratoria.cuadra.co:9339/api/v1/students/"
};

var plantillaLista = '<li>' + 
	'__nombre__' + ' ' +
	'__apellidoP__' + ' ' +
	'__apellidoM__'+
	'<input type="checkbox">' +
	'</li>';

var cargarPagina = function () {
	cargarLista();
};

var cargarLista = function () {
	$.getJSON(api.url, function (elementos) {
		elementos.forEach(mostrarElementos)
	});
};

var mostrarElementos = function (elemento) {
	var plantillaListaFinal = " ";

	var nombreAlumna = elemento.name;
	var apellidoPaterno = elemento.pLastName;
	var apellidoMaterno = elemento.mLastName;
	
	plantillaListaFinal += plantillaLista
			.replace("__nombre__", nombreAlumna)
			.replace("__apellidoP__", apellidoPaterno)
			.replace("__apellidoM__", apellidoMaterno)
	
	$("#lista").prepend(plantillaListaFinal);
};

$(document).ready(cargarPagina);
