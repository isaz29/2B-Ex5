let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let btCalculo = document.querySelector("#btCalculo");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularMedias() {

    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let n3 = Number(num3.value);

    //Calcular a média aritimética
    let mediaAritimetica = (num1 + num2 + num3) / 3;

    //Fórmula da média ponderada
    //(x1 * p1) + (x2 * p2) + (x3 * p3)
    //---------------------------------
    //          (p1 + p2 + p3)

    //Calcular a média ponderada
    let somaValoresPeso = (num1 * 3) + (num2 * 2) + (num3 * 5)
    let somaPesos = 3 + 2 + 5;
    let mediaPonderada = somaValoresPeso / somaPesos;

    //calcular a soma das medias
    let somaMedias = mediaAritimetica + mediaPonderada;

    //calcular a media das medias
    let mediaDasMedias = somaMedias / 2;

    h3Resultado.innerHTML = "Média Aritimética: " + mediaAritimetica + "<br>" +
        " Média Ponderada: " + mediaPonderada + "<br>" +
        " Soma das Médias: " + somaMedias + "<br>" +
        "Média das Médias: " + mediaDasMedias;

}

btCalculo.onclick = function () {
    calcularMedias();
}