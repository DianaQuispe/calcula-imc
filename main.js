
	var nombre = prompt("Ingrese tu nombre");
	var peso = prompt("Ingrese su PESO " + nombre);
	var altura = prompt("Ingrese su ALTURA " + nombre);	
	var IMC =peso/(altura * altura);
	alert(" Su indice de masa corporal(IMS) es: " + IMC.toFixed(2));
