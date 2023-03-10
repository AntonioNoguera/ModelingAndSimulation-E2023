const lambda=2.45

const elambda = Math.pow(2.7182818284,-lambda);

var R = Math.random().toFixed(5);
let sum = 0;
let Pois;
let Fact=1; 

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
VP=j;

console.log(j);
