function removetable(){
	tabla = document.getElementById("tabla");	
	if (!tabla){
		console.log("no hay tabla para eliminar");
	} else {
		padre = tabla.parentNode;
		padre.removeChild(tabla);
	}
}