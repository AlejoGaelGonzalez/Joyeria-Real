function calcular(){
        var a = parseFloat(document.getElementById("valor1").value) || 0,
        b = parseFloat(document.getElementById("valor2").value) || 0,
        c = parseFloat(document.getElementById("valor3").value) || 0,
        d = parseFloat(document.getElementById("valor4").value) || 0;
        e = document.getElementById("costo-pesos").value = a*b ;
        f = document.getElementById("ganancia-pesos").value = (e*c)/100;
        g = document.getElementById("subtotal").value = f+e;
        h = document.getElementById("iva").value = (g*d)/100;
        i = document.getElementById("total").value = h+g;
        console.log("Calculando");
}

function reiniciar(){
    a = document.getElementById("valor1").value = 0;
    b = document.getElementById("valor2").value = 0;
    c = document.getElementById("valor3").value = 0;
    d = document.getElementById("valor4").value = 0;
    e = document.getElementById("costo-pesos").value = 0;
    f = document.getElementById("ganancia-pesos").value = 0;
    g = document.getElementById("subtotal").value = 0;
    h = document.getElementById("iva").value = 0;
    i = document.getElementById("total").value = 0;
    console.log("Reiniciando");
}

/*
function mostrar(){
    document.getElementById("costo-pesos").style.display = "block";
}
*/