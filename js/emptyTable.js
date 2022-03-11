function emptytable() {

    const establa = document.querySelector("#tabla")
    if(establa != null) {

        td = document.querySelectorAll('td')
        let counter = 0;
        for(let i=0; i < td.length; i++) {
            if(td[i].innerText === "") {
                counter++;
            }
        }
        if(counter === 0) {
            const messages = document.getElementById('messages');
            messages.innerHTML = 'La tabla NO estaba vacía, borramos los datos'
            
            for(let i=0; i < td.length; i++) {
                td[i].innerText = ""
            }
        }
        else {
            const messages = document.getElementById('messages');
            messages.innerHTML = 'Tabla vacía, no hacemos nada'
        }
    }
    else {
        const messages = document.getElementById('messages');
        messages.innerHTML = 'No hay tabla ni datos, no hacemos nada'
    }
}