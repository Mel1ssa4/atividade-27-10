// let body = document.querySelector("body");
// let div = document.querySelector("div");
// body.removeChild(div);
// let h1 = document.querySelector("#trocarCor");


// Esse comando serve para eu acessar a propriedade de cores da fonte no html
// h1.style.color = "white";
// h1.style.background = "red";
// h1.style.height = "05px";
// SEMPRE QUE QUISER ALTERAR OU SABER UM VALOR DO CSS DE UM ELEMENTO HTML
// nomeDaTag.style.atributo

//  let body = document.querySelector("body");
//  body.style.backgroundColor = "black";

//  var h1 = document.querySelector("h1");
//  var paragrafo = document.querySelector("p");

//  paragrafo.innerText = h1.innerText;

// minha versão:
// let cor = prompt("Digite uma cor: ").toLowerCase().trim();
// document.body.style.backgroundColor = "Cor";
// const primarias = ["vermelho", "azul", "amarelo"];
// const secundarias = ["verde", "laranja", "roxo"];
// const terciarias = ["vermelho-alaranjado", "amarelo-alaranjado", "amarelo-esverdeado"];

//     if (primarias.includes(cor)) {
//     alert("Cor primaria escolhida");
//     }
//     else if(secundarias.includes(cor)){
//        alert("Cor secundaria escolhida");
//     }
//     else if(terciarias.includes(cor)){
//        alert("Cor terciaria escolhida");
//     }
//     else {
//        alert("Cor não classificada.");
//     }
     
// let button = document.querySelector("button");
// button.addEventListener("Clique",function(){
//     console.log("cliquei")
// });

document.querySelector("button").addEventListener("click", function(){
document.body.style.backgroundColor = "black";
document.body.style.color = "white";
});






