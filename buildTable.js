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

        fetch('getShifts.php')
            .then(response => response.json())
            .then(data => {
                console.log(data.length)
                console.log(Object.keys(data[1]));
                console.log(Object.keys(data[1]).length);
                for(let i = 0; i < data.length; i++) {
                    console.log(data[i].id_shift);
                    console.log(data[i].shift);
                    console.log(data[i].start_time);
                    console.log(data[i].end_time);

                    /*
                    const row = document.createElement('tr')
                    row.innerHTML += `
                    <td>${data[i].id_shift}</td>
                    <td>${data[i].shift}</td>
                    <td>${data[i].start_time}</td>
                    <td>${data[i].end_time}</td>
                    `;
                    tbody.appendChild(row)
                    */
                        
                };
            })
            .catch(e => console.log(e))
    }
}