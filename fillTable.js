function filltable() {

    const h0 = document.getElementById('h0').value;
    const h1 = document.getElementById('h1').value;
    const h2 = document.getElementById('h2').value;
    const h3 = document.getElementById('h3').value;
    const h4 = document.getElementById('h4').value;
    const h5 = document.getElementById('h5').value;
    //console.log(h0, h1, h2, h3, h4, h5);

    fetch(`setShifts.php?h0=${h0}&h1=${h1}&h2=${h2}&h3=${h3}&h4=${h4}&h5=${h5}`)
        .then(response => response)
        .then(data => console.log(data))
        .catch(e => console.log(e))
}