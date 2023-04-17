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
    const e_lambda = Math.pow(2.7182818284,-lambda);

    var arrR = "";
    var arrValores = [];

    for(var i=0;i<N;i++){
        var R = Math.random().toFixed(5);
        console.log(R)
        let sum = 0;
        let Pois;
        let Fact=1; 

        arrR+= R+", ";

        for(var j=0;sum<=R;j++){
            
            if(j == 0){
                Pois = e_lambda*Math.pow(lambda, j); 
            }else{
                Fact*= j;
                Pois = (e_lambda*Math.pow(lambda, j)) / Fact; 
            }
            sum += Pois; 
        }
        arrValores+= j-1+", "; 
    } 

    document.getElementById("rGenerado").innerHTML = arrR;
    document.getElementById("vGenerados").innerHTML  = arrValores; 
}