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
            console.log('la tabla NO está vacía, borramos los datos');
            for(let i=0; i < td.length; i++) {
                td[i].innerText = ""
            }
        }
        else {
            console.log('tabla vacía, no hacemos nada');
        }
    }
    else {
        console.log('no hay tabla ni datos, no hacemos nada');
    }
}