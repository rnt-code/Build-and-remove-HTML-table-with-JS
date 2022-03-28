function fullfiltable() {

    const establa = document.querySelector("#tabla")
    if(establa != null) {
        //console.log(establa);
        const td = document.querySelectorAll('td')
        console.log(td.length);
        let counter = 0;
        for(let i=0; i < td.length; i++) {
            if(td[i].innerText === "") {
                counter++;
            }
        }
        let errors = false;
        if(counter > 0) {
        //la tabla está vacía
        fetch('getShifts.php')
            .then(response => response.json())
            .then(shifts => {
                
                let {data, errors, message} = shifts; //desestructuración de objetos
                
                /*
                console.log(shifts);
                console.log(data);
                console.log(errors)
                console.log(message);
                */

                if(!errors) {
                    const messages = document.getElementById('messages');
                    messages.innerHTML = 'Hay una tabla vacía, llenamos la tabla'
                    len = data.length;
                    console.log(data);
                    console.log('length = ',len);
                    let i = 0;
                    //orden descendente
                    for(let j = (len-1); j >= 0 ; j--) { 
                        console.log(data[j]);
                        i = 8 - 4*j;  //el 8 = data[x].length * (data.length - 1)
                        td[i].innerHTML = data[j].id_shift
                        td[i+1].innerHTML = data[j].shift
                        td[i+2].innerHTML = data[j].start_time
                        td[i+3].innerHTML = data[j].end_time  
                    }

                    /*
                    //orde ascendente
                    let i = 0;
                    for(let j = 0; j < len ; j++) { 
                        i = 4*j; 
                        //el 4 de la expresión 'i = 4*j' son la cantidad de columnas de la lista, o lo que los mismo 4 = data[x].length.
                        //El máximo valor de i será 8
                        td[i].innerHTML = data[j].id_shift
                        td[i+1].innerHTML = data[j].shift
                        td[i+2].innerHTML = data[j].start_time
                        td[i+3].innerHTML = data[j].end_time  
                    }
                    */
                }
                else {
                    const messages = document.getElementById('messages');
                    const errormessages = document.getElementById('errormessages');
                    
                    messages.innerHTML = "Error"
                    errormessages.innerHTML = message
                    setTimeout(() => {
                        errormessages.innerHTML = ''
                    }, 5000);
                }
            })
            .catch(e => {
                console.error(e)
                const messages = document.getElementById('messages');
                const errormessages = document.getElementById('errormessages');
                
                messages.innerHTML = "Error"
                errormessages.innerHTML = 'Falla al traer datos, no se pudo obtener los recursos de origen...'
                setTimeout(() => {
                    errormessages.innerHTML = ''
                }, 5000);
            })
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