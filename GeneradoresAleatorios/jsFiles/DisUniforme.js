function prueba1() {
    var a = document.getElementById('num').value;
    var b = document.getElementById('num1').value;
    var Vu;
        
    let NumRandom = Math.random().toFixed(2);
    console.log(NumRandom);
    
    Vu = parseInt(a) + NumRandom*(parseInt(b-a));
    Vu.toFixed(2);
    console.log(Vu);

    document.getElementById("Resultado").innerHTML = Vu;
}