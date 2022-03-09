function removetable(id){
	tabla = document.getElementById(id);	
	if (!tabla){
		alert("no hay tabla para eliminar");
	} else {
		padre = tabla.parentNode;
		padre.removeChild(tabla);
	}
}