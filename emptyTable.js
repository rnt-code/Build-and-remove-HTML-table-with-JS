function emptytable() {
    const establa = document.querySelector("#tabla")
    //console.log(establa);
    if(establa != null) {

        td = document.querySelectorAll('td')
        
        for(let i=0; i < td.length; i++) {
            td[i].innerText = ""
        }
    }
}