
var peso = prompt("Ingrese su peso en kgs: ");
var tamanio = prompt("Ingrese su estatura en mts: ", "1.65");

var imc;

function calcular (mts, kg){
		var indice;
			
		indice = kg/(mts*mts);
		indice = indice.toFixed(2);
		return indice;
	}

imc = calcular(tamanio, peso);
alert("Su indice de Masa corporal es: " + imc);