
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
 
    for(var j=0; j<N; j++ ){
        
        var NumRandom = parseFloat(Math.random());
        ArrayR.push(NumRandom.toFixed(5)); 

        var Vu = parseFloat(a) + NumRandom*(parseFloat(a-b));
        ArrayVu.push(Vu.toFixed(5)); 
    }
    console.log(ArrayR);
    console.log(ArrayVu);

    document.getElementById("Resultado").innerHTML = ArrayVu;
    document.getElementById('arreglo').innerHTML = ArrayR;
}