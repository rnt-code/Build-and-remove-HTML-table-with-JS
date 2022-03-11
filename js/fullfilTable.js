function fullfiltable() {

    const establa = document.querySelector("#tabla")
    if(establa != null) {
        //console.log(establa);
        const td = document.querySelectorAll('td')
        let counter = 0;
        for(let i=0; i < td.length; i++) {
            if(td[i].innerText === "") {
                counter++;
            }
        }
        if(counter > 0) {
        const messages = document.getElementById('messages');
        messages.innerHTML = 'Hay una tabla vacía, llenamos la tabla'

        fetch('getShifts.php')
            .then(response => response.json())
            .then(data => {
                
                let i = 0;
                for(let j = 0; j < data.length; j++) {                 
                        i = 4*j;  
                        td[i].innerHTML = data[j].id_shift
                        td[i+1].innerHTML = data[j].shift
                        td[i+2].innerHTML = data[j].start_time
                        td[i+3].innerHTML = data[j].end_time      
                }
            })
            .catch(e => console.log(e))
        }
        else {
            const messages = document.getElementById('messages');
            messages.innerHTML = 'Hay una tabla llena, no hacemos nada'

        }
    }
    else {
        const messages = document.getElementById('messages');
        messages.innerHTML = 'No hay tabla para llenar, no hacemos nada'
    }
}