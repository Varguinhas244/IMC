


function calcularimc() {
    const peso = window.document.getElementById("peso").value;

    const altura = window.document.getElementById("altura").value;

    const imc = peso / (altura ** 2);

    document.getElementById("resultado").textContent = imc.toFixed(2); //documete get elemte so pra selecionar a id do html // .textcontent vai formar m texto colocando = para falar qual vai ser o texto
}

let titulodinamico  = document.title; 

window.addEventListener("blur", ()=> {
    document.title = "Volta filho"
}) 

window.addEventListener("focus", ()=> {
    document.title = "Um bom filho retorna a sua casa"
})