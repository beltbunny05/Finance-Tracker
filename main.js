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

//---gasolina---
cat_gasolina.onclick = () => {

    let valor_digitado = Number(input_gasto.value);

    let gasolina_atual = Number(localStorage.getItem("valor_gasolina")) || 0;

    let total_gasolina = gasolina_atual + valor_digitado;

    localStorage.setItem("valor_gasolina", total_gasolina);

    texto_gasolina.textContent = total_gasolina;

};

//---comida---
cat_comida.onclick = () =>{
    let valor_digitado = Number(input_gasto.value);

    let comida_atual = Number(localStorage.getItem("valor_comida")) || 0;

    let total_comida = valor_digitado + comida_atual;

    localStorage.setItem("valor_comida", total_comida);

    texto_comida.textContent = total_comida;
}


//---compras---
cat_compras.onclick = () =>{
    let valor_digitado = Number(input_gasto.value);

    let compras_atual = Number(localStorage.getItem("valor_compras")) || 0;

    let total_compras = valor_digitado + compras_atual;

    localStorage.setItem("valor_compras", total_compras);

    texto_compras.textContent = total_compras;
}

//---mostrar gastos---
let button_total = document.getElementById("button_total");

let texto_total = document.getElementById("texto_total");

button_total.onclick = () => {
    texto_total.textContent = `Total: Gasolina - ${texto_gasolina.textContent} Comida - ${texto_comida.textContent} Compras - ${texto_compras.textContent}`;
}