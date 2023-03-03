
function prueba1() {
    var N = document.getElementById('numal').value;
    var a = document.getElementById('num').value;
    var b = document.getElementById('num1').value;
    var ArrayVu=[];
    var ArrayR=[];
        
    if(N>10){
        alert("No agregues mas de 10 elementos al vector...");
    }else if((a<=0) || (b<=0) ){
        alert("No puedes ingresar valores negativos o saldrá erroneo el resultado");
    }


    for(var i=0; i<=N; i++){
        
        var NumRandom = Math.random().toFixed(2);
        ArrayR.push(NumRandom);
        console.log(ArrayR);
    }
    
    document.getElementById('arreglo').innerHTML = ArrayR;
    
    for(var j=0; j<=N; j++ ){
        
        var Vu;
        Vu = parseInt(a) + ArrayR[j]*(parseInt(a-b));
        Vu.toFixed(2);
        ArrayVu.push(Vu);
        console.log(ArrayVu);
    }

    document.getElementById("Resultado").innerHTML = ArrayVu;
}