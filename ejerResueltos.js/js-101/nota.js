var nombre = process.argv[2];
var nota = process.argv[3];

var notafinal = Number(nota);
if(notafinal>=7){
	console.log('El alumno ',nombre,"se sacó un",notafinal,". Felicitaciones por aprobar");
}
else if(notafinal>4){
	console.log('El alumno ',nombre,"se sacó un",notafinal,". La próxima entrega espero un mejor trabajo");
}