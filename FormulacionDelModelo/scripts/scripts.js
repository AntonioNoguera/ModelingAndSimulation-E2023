//Esquema Principal
function FormulacionModulo(TLimite){
    Reloj=0;
}

//Funciones
function segmento1y2(){
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

    if(j==0){
        j=1;
    }

    VP=j;

    return VP;

    console.log(j);
}

function segmento3y4(){

    if(Fila1 !=0 && Fila2<=5){
        Ts2=Ts2-devicePixelRatio;
        
        if(Ts2==0){
            if(LCajas==0){
                Fila2=Fila2+1;
            }else{
                LCajas=LCajas-1;
            }

            Na2=Na2+1;
            Fila=Fila1-1;

            

            Ts2=segmento1y2();
        }
    }else{
        To2=To2+delta;
    }

    if(Fila1<=5){
        Ts1=Ts1-delta;
        if(Ts1==0){
            Fila1=Fila1+1;
            Na1=Na1+1;
            Ts1=segmento1y2();
        }
    }else{
        To1=To1+delta;
    }
    if(LCajas==0 && Fila1>5 && Fila2>5){
        Ret=true;
    }
}