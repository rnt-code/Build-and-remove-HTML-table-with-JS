function buildtable() {

    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const div = document.getElementById("datos");
    //console.log(div);
    div.appendChild(tabla);
    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    
    const rowh = thead.innerHTML += `
                <th>id shift</th>
                <th>shift</th>
                <th>start time</th>
                <th>end time</th>
                `;
                tbody.appendChild(rowh)

    fetch('getShifts.php')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let datos = document.getElementById('datos');

            /*
            console.log(data[0].id_shift);
            console.log(data[1].id_shift);
            console.log(data[2].id_shift);
            */

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