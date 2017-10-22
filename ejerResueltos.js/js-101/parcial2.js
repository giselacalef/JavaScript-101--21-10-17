var compra = 500;
var descuento = 15;
if(compra>100){
	console.log("Total a pagar: ", compra - compra*descuento/100);
}
else {
	console.log('no aplica descuento');
}