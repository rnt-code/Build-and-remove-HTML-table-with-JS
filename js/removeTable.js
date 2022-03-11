function removetable(){

	establa = document.getElementById("tabla");	
	if (!establa){

		console.log("no hay tabla para remover, no hacemos nada");
	} else {

		console.log('hay tabla y la removemos');
		div = establa.parentNode;
		div.removeChild(establa);
	}
}