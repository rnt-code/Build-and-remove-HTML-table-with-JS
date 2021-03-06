function buildtable() {

    const establa = document.querySelector("#tabla")
    //console.log(establa);
    if(establa === null) {
        //dibujar y llenar la tabla
        console.log('dibujar y llenar la tabla');
        const tabla = document.createElement("table");
        tabla.id = 'tabla'
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");
        const div = document.getElementById("datos");
        //console.log(div);
        div.appendChild(tabla);
        tabla.appendChild(thead);
        tabla.appendChild(tbody);
        
        const rowh = document.createElement('tr')
                rowh.innerHTML += `
                    <th>id_shift</th>
                    <th>shift</th>
                    <th>start_time</th>
                    <th>end_time</th>
                    `;
                    thead.appendChild(rowh)

        fetch('getShifts.php')
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                for(let i = 0; i < data.length; i++) {
        
                    const row = document.createElement('tr')
                    row.innerHTML += `
                    <td>${data[i].id_shift}</td>
                    <td>${data[i].shift}</td>
                    <td>${data[i].start_time}</td>
                    <td>${data[i].end_time}</td>
                    `;
                    tbody.appendChild(row)
                        
                };
            })
            .catch(e => console.log(e))
    }
    else {
        //la tabla está dibujada
        console.log('la tabla está dibujada');
        td = document.querySelectorAll('td')
        let counter = 0;
        for(let i=0; i < td.length; i++) {
            if(td[i].innerText === "") {
                counter++;
            }
        }
        console.log('counter=', counter);
        if(counter != 0) {
            console.log('llenar la tabla con datos');
            //llenar la tabla con los datos, la cabecera ya está presente
        }
        else {
            console.log('no hacer nada, ya hay datos en la tabla');
        }
    }
}