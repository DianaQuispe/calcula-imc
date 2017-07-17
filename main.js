
function calculadora(peso,altura) {
var peso = prompt("Dime tu peso: ");
var altura = prompt("Dime tu altura: ");
 peso = parseFloat(peso);
 altura = parseFloat(altura);
 altura =  Math.pow(altura,2);
var imc = peso/altura;
  
	return alert("Tu imc es: "+imc.toFixed(2));
}
calculadora();
