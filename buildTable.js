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

        fetch('getShifts.php')
            .then(response => response.json())
            .then(data => {
                console.log('data= ', data)
                console.log('data= ', data[1].length)
                
                //console.log(Object.keys(data[1]).length);
                //console.log(data.length);

                td = document.querySelectorAll('td');
                //console.log(td);
                let j = -4;
                let l = 0;
                for() {
                    console.log('object= ', 0.id_shift);
                    //console.log(Object.keys(object).length)
                    /**
                    j = j + 4;
                    console.log('j= ',j);
                    for(let i = j; i < (Object.keys(object)).length + j; i++) {
                        l++;
                        console.log('interno= ',i);
                        
                        td[i].innerHTML = data[l].id_shift;
                        td[i+1].innerHTML = data[l].shift;
                        td[i+2].innerHTML = data[l].start_time;
                        td[i+3].innerHTML = data[l].end_time;
                        */

                        /*
                        const row = document.createElement('tr')
                        row.innerHTML += `
                        <td>${data[i].id_shift}</td>
                        <td>${data[i].shift}</td>
                        <td>${data[i].start_time}</td>
                        <td>${data[i].end_time}</td>
                        `;
                        tbody.appendChild(row)
                        
                            
                    };
                    */
                }
            })
            .catch(e => console.log(e))
    }
}