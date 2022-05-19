function validarNotas(nota) {
    if (nota < 0 || nota > 10) {
        alert("vuelva a ingresar la nota")
    }
}

function promedio(){
    let mate = document.getElementById("matematica");
    let lengua = document.getElementById("lengua");
    let efsi = document.getElementById("efsi");
    let resultado;

    resultado = mate + lengua + efsi /3;

}




function validarNotas(){
    var texto = document.getElementById().ariaValueMax;

    if(matematica.length > 5){
        document.getElementById(matematica).style.color = "red";
    }
}