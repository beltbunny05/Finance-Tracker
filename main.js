// ---input---
let novoGasto = document.getElementById("Gasto");
let categoria = document.getElementById("Categoria");
let valordogasto = document.getElementById("Valor");
// ---texto---
let mostrargasto = document.getElementById("texto") 
// ---botao---
let botaozao = document.getElementById("button1");
// ------------
botaozao.onclick = () => {
    let valor_salvo = Number(novoGasto.value);
};



//Aprender como fazer o input sair dados para o tracker
localStorage.setItem("","");