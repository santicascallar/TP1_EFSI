function validarNotas() {
    var mate = document.getElementById("matematica").value;
    var lengua = document.getElementById("lengua").value;
    var efsi = document.getElementById("efsi").value;

    if (mate < 0 || mate > 10) {
        document.getElementById("matematica").style.color = "red";
        alert("Por favor ingrese un numero entre 0 y 10")
    }
    else {
        document.getElementById("matematica").style.color = "#3CC311";
    }

    if (lengua < 0 || lengua > 10) {
        document.getElementById("lengua").style.color = "red";
        alert("Por favor ingrese un numero entre 0 y 10")
    }
    else{
        document.getElementById("lengua").style.color = "#3CC311";
    }

    if (efsi < 0 || efsi > 10) {
        document.getElementById("efsi").style.color = "red";
        alert("Por favor ingrese un numero entre 0 y 10")
    }
    else{
        document.getElementById("efsi").style.color = "#3CC311";
    }
}

function promedio(){
    var mate = document.getElementById("matematica").value;
    var lengua = document.getElementById("lengua").value;
    var efsi = document.getElementById("efsi").value;
    var resul = document.getElementById("resultado").value;
    var resultado;

    nota = verificarNota(mate,lengua,efsi);

    if(nota == true){
        alert("Ingrese todas las notas");
    }
    else{
        resultado = (parseInt(mate)+parseInt(lengua)+parseInt(efsi)) /3;

        resul = resultado;
        document.getElementById("resultado").innerHTML = "El promedio es " + resultado;

        if(resultado >= 6){
            document.getElementById("resultado").style.color = "#3CC311";
        }
        else{
            document.getElementById("resultado").style.color = "red";
        }
    }

    
}

function mayorNota(){
    var mate = document.getElementById("matematica").value;
    var lengua = document.getElementById("lengua").value;
    var efsi = document.getElementById("efsi").value;
    var nota = document.getElementById("notaAlta").value;

    if(parseInt(mate) > parseInt(lengua) && parseInt(mate) > parseInt(efsi)){

        //nota = "La mayor nota es: Matematica "+ parseInt(mate);
        document.getElementById("notaAlta").innerHTML = "La mayor nota es: Matematica "+ parseInt(mate);
        document.getElementById("notaAlta").style.color = "blue";
    }
    else if(parseInt(lengua) > parseInt(efsi) && parseInt(lengua) > parseInt(mate)){
   
        //nota = "La mayor nota es: Lengua "+ parseInt(lengua);
        document.getElementById("notaAlta").innerHTML = "La mayor nota es: Lengua "+ parseInt(lengua);
        document.getElementById("notaAlta").style.color = "blue";
    }
    else if(parseInt(lengua) == parseInt(mate) && parseInt(lengua) == parseInt(efsi)){
        document.getElementById("notaAlta").innerHTML = "Las mayores notas son: Lengua, Matematica y EFSI";
        document.getElementById("notaAlta").style.color = "blue";
    }
    else if(parseInt(lengua) == parseInt(mate) && parseInt(lengua) > parseInt(efsi)){
        document.getElementById("notaAlta").innerHTML = "Las mayores notas son: Lengua y Matematica";
        document.getElementById("notaAlta").style.color = "blue";
    }
    else if(parseInt(mate) == parseInt(efsi)){
        document.getElementById("notaAlta").innerHTML = "Las mayores notas son: Matematica y EFSI";
        document.getElementById("notaAlta").style.color = "blue";
    }
    else if(parseInt(lengua) == parseInt(efsi)){
        document.getElementById("notaAlta").innerHTML = "Las mayores notas son: Lengua y EFSI";
        document.getElementById("notaAlta").style.color = "blue";
    }
    else {
        document.getElementById("notaAlta").innerHTML = "La mayor nota es: EFSI "+ parseInt(efsi);
        document.getElementById("notaAlta").style.color = "blue";
    }
}

let verificarNota = (nota1,nota2,nota3) => {
    let vecNotas=[nota1,nota2,nota3];
    let validarNota=false;
    vecNotas.forEach(nota => {
        if(nota==null || nota=='' || nota==NaN){
            validarNota=true
        }
    });
    return validarNota;
}