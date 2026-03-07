// ---input---
let input_gasto = document.getElementById("Gasto");
let categoria = document.getElementById("Categoria");
let valordogasto = document.getElementById("Valor");
// ---texto---
let mostrargasto = document.getElementById("texto") 
// ---botao---
let novo_gasto = document.getElementById("button1");
// ------------
novo_gasto.onclick = () => {
    let valor_salvo = Number(input_gasto.value);
    mostrargasto.textContent = valor_salvo;
};




//Aprender como fazer o input sair dados para o tracker
localStorage.setItem("","");