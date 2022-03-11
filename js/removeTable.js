function removetable(){

	establa = document.getElementById("tabla");	
	if (!establa){
		const messages = document.getElementById('messages');
        messages.innerHTML = 'No hay tabla para remover, no hacemos nada'
	} else {
		const messages = document.getElementById('messages');
        messages.innerHTML = 'Existe una tabla y la removemos'
		div = establa.parentNode;
		div.removeChild(establa);
	}
}