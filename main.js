
var nombre = prompt("Ingrese su nombre");
var peso = prompt( nombre + "ingrese su PESO en kgs: ");
var tamanio = prompt(  nombre + "ingrese su ESTATURA en mts: ", "1.65");
var imc;

function calcular (mts, kg){
		var indice;
		mts =  Math.pow(mts,2);	
		indice = kg/mts;
		indice = indice.toFixed(2);
		return indice;
	}

imc = calcular(tamanio, peso);
alert(nombre + " tu indice de Masa corporal es: " + imc );
