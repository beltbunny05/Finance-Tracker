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

//---reset---

let botao_reset = document.getElementById("reset");

botao_reset.onclick = () => {

    localStorage.setItem("valor", "0");

    mostrargasto.textContent = `0`;

};

//---categorias---

let cat_gasolina = document.getElementById("gasolina");

let cat_comida = document.getElementById("comida");

let cat_compras = document.getElementById("compras");

cat_gasolina.onclick = () => {
    const categoria_gasolina = localStorage.getItem("valor");

    let texto_gasolina = document.getElementById("texto_gasolina");

    texto_gasolina.textContent = categoria_gasolina;

}