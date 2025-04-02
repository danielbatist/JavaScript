
function mostrarForms() {
    document.getElementById("forms").style.display = "block";
    document.querySelector("button").style.display = "none";
}
function conversor() {
    let valorReal = document.getElementById("valorReal").value;
    if (isNaN(valorReal) || valorReal <= 0)
    {
        document.getElementById("resultado").innerText = "Por favor, digite um valor válido!";
        return;
    }
    let taxaCambio = 5.70;
    let valorDolar = valorReal / taxaCambio;
    document.getElementById("resultado").innerText = 'O valor em dólar é: $' + valorDolar.toFixed(2);
}