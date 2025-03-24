const valorDolar = parseFloat(prompt("Qual o valor do Dólar atualmente?"));

function converter() {
  const valorReal = parseFloat(
    prompt("Qual o valor em Reais que deseja converter?")
  );
  const valorConvertido = valorReal / valorDolar;

  const result = document.getElementById("resultado");
  result.innerHTML = `R$${valorReal} equivale a US$${valorConvertido.toFixed(
    2
  )}`;
}
