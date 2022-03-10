function buildtable() {

    td = document.querySelectorAll('td')
        let empty = 0;
        for(let i=0; i < td.length; i++) {
            if(td[i].innerText === "") {
                empty++;
            }
        }
    //console.log(empty);
    const establa = document.querySelector("#tabla")
    //console.log(establa);
    if(establa === null) {
        
        /**construcción de la tabla*/
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

        for(let i = 0; i < 3; i++) {  
            const row = document.createElement('tr')
            row.innerHTML += `
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                `;
            tbody.appendChild(row)      
        };
        /*fin contrucción tabla*/

        //llenar tabla
        fetch('getShifts.php')
            .then(response => response.json())
            .then(data => {
                console.log('data= ', data)
                console.log('data[1]= ', data[1])
                
                console.log(data.length, ' objetos');
                console.log(Object.keys(data[1]).length, ' atributos del objeto');
               

                td = document.querySelectorAll('td');
                console.log('12 los elemento <td>: ',td);
                let i = 0;
                for(let j = 0; j < 3; j++) {
                    console.log('j === ', j)                   
                    
                        i = 4*j;
                        console.log('i = ', 4*j, '/ j = ', j);
                        
                        td[i].innerHTML = data[j].id_shift
                        td[i+1].innerHTML = data[j].shift
                        td[i+2].innerHTML = data[j].start_time
                        td[i+3].innerHTML = data[j].end_time      
                    
                }
            })
            .catch(e => console.log(e))
    }
}