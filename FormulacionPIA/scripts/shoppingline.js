//Hora de arranque 4:50 pm
//Notas de error actual, las listas 1 si se aumenta, la otra no

'use strict'
var Reloj = 0;
var desfase = 0;
var clientesAtendidos = [];
var TOcioM = [];
var estadoM = [];
var T_LlegadaC = [];

function validacion() {
    var tiempoL = parseInt(document.getElementById("tiempoA").value);
    if (isNaN(tiempoL) || tiempoL <= 0) {
        alert("INGRESE UN VALOR VALIDO");
    } else {
        simulacionCajas(tiempoL);
    }
}

function simulacionCajas(tiempoLimite) {
    Reloj = 0;
    desfase = 0;

    //generacion de la lista de tiempos
    //Donde true desplegara mas de un tiempo, y false solo 1, esta linea añade miembros a la cola
    T_LlegadaC = [0];
    alphagPoisson(true, 1.36);
    //T_OperacionC = alphagPoisson(false,2.42,T_OperacionC);

    clientesAtendidos = [0, 0, 0, 0, 0, 0];
    TOcioM = [0, 0, 0, 0, 0, 0];
    estadoM = [0, 0, 0, 0, 0, 0];

    do {
        //Verificar en que cliente se va
        var flag = false;
        var iterador = 0;
        console.log("M I N U T O → " + Reloj);
        do {
            console.log(T_LlegadaC);
            console.log((T_LlegadaC[0]) + "<=" + (Reloj - desfase));

            if ((T_LlegadaC[0]) <= Reloj - desfase) {

                alphagPoisson(true, 1.36);

                if (asignarMaquina(alphagPoisson(false, 2.42) + 1)) {
                    //Antes de esto se tendra que calcular el nuevo miembro de la lista
                    T_LlegadaC.shift();
                } else {
                    console.log("YA NO HAY MAQUINAS DISPONIBLES HAY DESFASE DE:  " + desfase)
                    desfase++;
                }

            } else {
                console.log("No mas clientes")
                flag = true;
            }
        } while (flag == false);

        //Recorrer el arreglo para observar si el cliente  
        console.log("Verificacion de las colas")
        supervisionMaquinas();
        Reloj++;
    } while (Reloj < tiempoLimite);
    animacionTabla();
    console.log("DESFASE TOTAL: " + desfase)
    console.log("ATENDIDOS: " + clientesAtendidos)

    console.log("Tiempos de Ocio : " + TOcioM)
}

function asignarMaquina(tOperacion) {
    var iterador = 0;
    var flagM = false;

    for (var i = 0; i < estadoM.length; i++) {
        if (estadoM[i] == 0) {

            estadoM[i] = tOperacion;
            clientesAtendidos[i]++;

            console.log("La máquina " + i + " se ha ocupado! Con un tiempo de → " + tOperacion);

            return true;
        }
    }

    return false;
}

function supervisionMaquinas() {
    for (var i = 0; i < TOcioM.length; i++) {
        if (estadoM[i] != 0) {
            estadoM[i] = estadoM[i] - 1;
            if (estadoM[i] == 0) {
                console.log("LA MAQUINA " + i + " SE HA DESOCUPADO");
            }

        } else {
            TOcioM[i] = TOcioM[i] + 1;
        }
    }
}

function alphagPoisson(dependiente, lambda) {

    if (dependiente) {
        //Esto va a ser cambiado por un while, hasta que n, sea distinto de n-1
        console.log("agregando nuevos miembros!!")
        do {
            var nuevoElemento = T_LlegadaC[T_LlegadaC.length - 1] + poi(lambda)
            T_LlegadaC.push(T_LlegadaC[T_LlegadaC.length - 1] + poi(lambda));
        } while (T_LlegadaC[T_LlegadaC.length - 1] == T_LlegadaC[T_LlegadaC.length - 2]);

    } else {
        return poi(lambda);
    }

}

function poi(lambda) {

    const e_lambda = Math.pow(2.7182818284, -lambda);

    var R = Math.random().toFixed(5);

    let sum = 0;
    let Pois;
    let Fact = 1;

    for (var j = 0; sum <= R; j++) {

        if (j == 0) {
            Pois = e_lambda * Math.pow(lambda, j);
        } else {
            Fact *= j;
            Pois = (e_lambda * Math.pow(lambda, j)) / Fact;
        }
        sum += Pois;
    }

    return (j - 1);
}

function generarTabla() {

    var tabla = "<table class='table table-striped'><thead><tr>"
    tabla += "<th scope='col' colspan='4' style='text-align:center;font-size:1.5em;' >Resultados de la Simulación</th>"
    tabla += "</tr><tr><th scope='col' style='text-align:center;'>Número de Caja</th>"
    tabla += "<th scope='col' style='text-align:center;'>Clientes Atendidos</th>"
    tabla += "<th scope='col' style='text-align:center;'>Tiempo de Ocio</th>"
    tabla += "<th scope='col'style='text-align:center;'>Carga de Trabajo</th></tr></thead>";
    tabla += "<tbody>"

    let suma = 0;
    let sumaOcio = 0
    for (let i = 0; i < clientesAtendidos.length; i++) {
        suma += clientesAtendidos[i];
        sumaOcio += TOcioM[i];
    }
    for (var i = 0; i < 6; i++) {
        tabla += "<tr><th style='text-align:center;' scope='row'>" + (i + 1) + "</th>";
        tabla += "<td style='text-align:center;'>" + clientesAtendidos[i] + "</td>";
        tabla += "<td style='text-align:center;'>" + TOcioM[i] + "</td>";
        tabla += "<td style='text-align:center;'>" + ((parseFloat(clientesAtendidos[i] * 100) / suma).toFixed(2)) + "%</td></tr>";
    }

    tabla += "<tr><th style='text-align:center;' scope='row'>Totales</th>";
    tabla += "<th style='text-align:center;' scope='row'>" + suma + "</th>";
    tabla += "<th style='text-align:center;' scope='row'>" + sumaOcio + "</th>";
    tabla += "<th style='text-align:center;' scope='row'>100%</th>";
    tabla += "</tr>"

    tabla += "</tbody></table>";



    document.getElementById("spanObjetivo").innerHTML = tabla;
}

function animacionTabla() {

    document.getElementById("cajaTabla").style.opacity = 0;
    document.getElementById("cajaTabla").style.transform = "translateY(3ch)";
    document.getElementById("cuerpo").style.cursor = "wait";
    document.getElementById("boton").style.cursor = "wait";

    setTimeout(() => {


        document.getElementById("cajaTabla").style.transform = "translateY(0px)";
        document.getElementById("cajaTabla").style.opacity = 1;
        document.getElementById("cuerpo").style.cursor = "auto";
        document.getElementById("boton").style.cursor = "auto";

        generarTabla();
    }, 1000);


} 