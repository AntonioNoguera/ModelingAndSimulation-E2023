//CÓDIGO DISTRIBUCION POISSON

function poisson(){
    var lambda = document.getElementById("inputLambda").value;
    var N = document.getElementById("nAzar").value;

    if((N<=0 || lambda<=0)){
        alert("Todos los campos deben ser positivos y mayores a 0!");
    }else{
        generadorPoisson(N,lambda);
    }
}

function generadorPoisson(N,lambda){
    const elambda = Math.pow(2.7182818284,-lambda);

    var arrR = "";
    var arrValores = [];

    for(var i=0;i<N;i++){
        var R = Math.random().toFixed(5);
        let sum = 0;
        let Pois;
        let Fact=1; 

        arrR+= R+", ";

        for(var j=0;sum<=R;j++){
            if(j == 0){
                Pois = elambda*Math.pow(lambda, j);
                sum += Pois; 
            }else{
                Fact*= j;
                Pois = (elambda*Math.pow(lambda, j)) / Fact;
                sum += Pois;
            }

        }
        console.log(typeof(sum));
        arrValores+= j+", "; 
    }
    console.log(arrR);
    console.log(arrValores);

    document.getElementById("rGenerado").innerHTML = arrR;
    document.getElementById("vGenerados").innerHTML  =arrValores; 
}