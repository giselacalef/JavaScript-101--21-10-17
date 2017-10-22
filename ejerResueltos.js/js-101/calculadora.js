var parametro1 = process.argv[3];
var parametro2 = process.argv[4];
var operacion = process.argv[2];
var primerNumero = Number(parametro1);
var segundoNumero = Number(parametro2);
if(operacion=='sumar'){
	console.log('La operación que se solicitó fue: ', operacion);
	console.log('El resultado es: ', primerNumero+segundoNumero);
}
else if(operacion=='restar'){
	console.log('La operación que se solicitó fue: ', operacion);
	console.log('El resultado es: ', primerNumero-segundoNumero);
}
else {
	console.log("No pasó el parametro correcto");
}

