function validarLargo(){
    var texto = document.getElementById(matematica).ariaValueMax;

    if(matematica.length > 5){
        document.getElementById(matematica).style.color = "red";
    }
}