// ---input---
let input_gasto = document.getElementById("Gasto");

// ---texto---
let mostrargasto = document.getElementById("texto");

// ---botao---
let novo_gasto = document.getElementById("button1");

novo_gasto.onclick = () => {

    // valor digitado
    let valor_digitado = Number(input_gasto.value);

    // valor já salvo (se não existir vira 0)
    let valor_atual = Number(localStorage.getItem("valor")) || 0;

    // soma
    let total = valor_atual + valor_digitado;

    // salvar novo total
    localStorage.setItem("valor", total);

    // mostrar na tela
    mostrargasto.textContent = total;
};

let botao_reset = document.getElementById("reset");

botao_reset.onclick = () => {

    localStorage.setItem("valor", "0");

    mostrargasto.textContent = `0`;

}