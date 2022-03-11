function buildtable() {

    const establa = document.querySelector("#tabla")
    if(establa === null) {    
        const messages = document.getElementById('messages');
        messages.innerHTML = 'No hay una tabla, construimos una'
        /**construcción de la tabla*/
        const tabla = document.createElement("table");
        tabla.id = 'tabla'
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");
        const div = document.getElementById("datos");

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

        for(let i = 0; i < 3; i++) {  
            const row = document.createElement('tr')
            row.innerHTML += `
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                `;
            tbody.appendChild(row)      
        };
        /*fin contrucción tabla*/
    }
    else {
        const messages = document.getElementById('messages');
        messages.innerHTML = 'Ya hay una tabla, no hacemos nada'
    }
}