function emptytable() {
    const establa = document.querySelector("#tabla")
    //console.log(establa);
    if(establa != null) {


        const $elemento = document.querySelector("#cuerpoTabla");

// El botón solo es para la demostración
const $btnLimpiar = document.querySelector("#btnLimpiar");

// Y en el click, limpiamos
$btnLimpiar.addEventListener("click", () => {
    $elemento.innerHTML = "";
});
    }
}