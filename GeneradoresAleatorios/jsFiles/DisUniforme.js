
function prueba1() {
    var N = document.getElementById('numal').value;
    var a = document.getElementById('num').value;
    var b = document.getElementById('num1').value;
        
    if(( N<=0 || !a || !b )){
        alert("Favor de llenar todos los campos, N > 0");
    }else if(parseInt(a) > parseInt(b) || a==b){
        alert("El valor de 'a' debe ser menor que 'b'");
        document.getElementById('Resultado').innerHTML = "";
        document.getElementById('arreglo').innerHTML = "";
    }else{
        distUniforme (N,a,b);
    }
}
function distUniforme (N,a,b){
    var ArrayVu=[];
    var ArrayR=[];

    for(var j=0; j<N; j++ ){
        
        var NumRandom = parseFloat(Math.random());
        ArrayR.push(NumRandom.toFixed(5)); 

        var Vu = parseFloat(a) + NumRandom*(parseFloat(b-a));
        ArrayVu.push(Vu.toFixed(5)); 
    }
    console.log(ArrayR);
    console.log(ArrayVu);

    document.getElementById('Resultado').innerHTML = ArrayVu;
    document.getElementById('arreglo').innerHTML = ArrayR;
}