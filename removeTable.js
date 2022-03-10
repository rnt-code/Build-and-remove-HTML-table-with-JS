function removetable(){
	tabla = document.getElementById("tabla");	
	if (!tabla){
		console.log("no hay tabla para eliminar");
	} else {
		div = tabla.parentNode;
		div.removeChild(tabla);
	}
}