function normal(){
    var media = document.getElementById("media").value;
    var desviacion = document.getElementById("desviacion").value;
    var n = document.getElementById("numRnd").value;


    if((n<=0 || media<=0 || desviacion<=0)){
        alert("Todos los campos deben ser positivos y mayores a 0!");
    }else{
        generadorNormal(media,desviacion,n);
    }
}

function generadorNormal(media,desviacion,n){

    var arrR = "";
    var arrValores = [];

    for(var i=0;i<n;i++){

    let sum = 0;
    let Normal=0;

        for(var j=0;j<12;j++){
            var R = parseFloat(Math.random().toFixed(5));
            sum += R; 
            arrR+= R+", ";
        } 

        Normal = parseFloat(media)+(desviacion*(sum-6)); 
        arrValores+= Normal+", "; 
    }
     
   
    document.getElementById("valoresR").innerHTML = arrR;
    document.getElementById("normal").innerHTML  = arrValores; 
}