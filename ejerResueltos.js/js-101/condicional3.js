var posicionEnLaCarrera = 1;
mensaje = '';
if(posicionEnLaCarrera==1){
	mensaje='GANASTE';
}
else if(posicionEnLaCarrera==2){
	mensaje='Te faltó poquito para ganar';
}
else if(posicionEnLaCarrera==3){
	mensaje='Sos un orgullo para tu familia';
}
else if(posicionEnLaCarrera>3){
	mensaje='Volvé a tu casa';
}
else{
	mensaje='no tires fruta';
}
console.log(mensaje);