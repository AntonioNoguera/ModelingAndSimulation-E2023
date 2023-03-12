//Esquema Principal
'use strict'
var Reloj=0;
var delta=0;
var LCajas=0;
var Ret = false;
var TC=0;
var Na1=0;
var Na2=0;
var TAsigC=60;
var NumRet=0;
var To1=0;
var To2=0;
var Fila1=0;
var Fila2=0;
var Ts1=0;
var Ts2=0;
var ToFaltaCajas=0;

function validacion(){
    var inputM=document.getElementById("inputTiempo").value; 
    if(inputM<=0){
        alert("No ingrese valores menores a 0");
    }else{
        FormulacionModulo(inputM);
    }
} 

function FormulacionModulo(TLimite){
    Reloj=0; delta=0; LCajas=30; var Ret = false; Na1=0; Na2=0; TC=0;
    TAsigC=60; NumRet=0; To1=0; To2=0; Fila1=0; Fila2=0; Ts1=0; Ts2=0;


    Ts1=segmento1y2();
    Ts2=segmento1y2(); 

    do{ 
        delta = Ts1>Ts2 ? Ts2 : Ts1;

        Reloj=Reloj+delta;
        TC=TC+delta;

        if(TC>=TAsigC){
            TC=TC-TAsigC;
            LCajas=LCajas+30;
            Ret=false
    
            if(Fila2!=0){
                LCajas=LCajas-Fila2;
                Fila2=0;
            }
        }
    
        if(Ret==true){ 
            NumRet = NumRet+1; 
            ToFaltaCajas=ToFaltaCajas+(TAsigC-TC);
            To1=To1+(TAsigC-TC);
            To2=To2+(TAsigC-TC);
            Reloj=Reloj+(TAsigC-TC);
            TC=TAsigC; 
    
        }else{
            segmento3y4();
        }

    }while(Reloj<=TLimite);
    var resultado="TIEMPO 1: "+To1+"<br>"+"TIEMPO 2: "+To2+"<br><br>"+"Na1: "+Na1+"<br>"+"Na2: "+Na2;
    
    document.getElementById("target").innerHTML=resultado
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

    var VP=j;

    return VP;
}

function segmento3y4(){ 
    if(Fila1!=0 && Fila2<=5){
        Ts2=Ts2-delta;
        
        if(Ts2==0){
            if(LCajas==0){
                Fila2=Fila2+1;
            }else{
                LCajas=LCajas-1;
            }

            Na2=Na2+1;
            Fila1=Fila1-1;

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