// ---input---
let input_gasto = document.getElementById("Gasto");
let categoria = document.getElementById("Categoria");
// ---texto---
let mostrargasto = document.getElementById("texto") 
// ---botao---
let novo_gasto = document.getElementById("button1");
// ------------
novo_gasto.onclick = () => {
    let valor_salvo = Number(input_gasto.value);
    mostrargasto.textContent = valor_salvo;

    localStorage.setItem("valor", valor_salvo);
};



const tracker =[
    {"gasto":"0"},
    {"categoria":"0"},
]

//Aprender como fazer o input sair dados para o tracker
localStorage.setItem("","");
localStorage.getItem("","");