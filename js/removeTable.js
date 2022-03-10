function removetable(){

	tabla = document.getElementById("tabla");	
	if (!tabla){
		console.log("no hay tabla para remover, no hacemos nada");
	} else {
		console.log('hay tabla y la removemos');
		div = tabla.parentNode;
		div.removeChild(tabla);
	}
}