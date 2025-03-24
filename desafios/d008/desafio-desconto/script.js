function calcularDesconto() {
  const produto = prompt("Qual protudo você está comprando?");
  const preco = parseFloat(prompt(`Qual o preço do ${produto}?`));

  const desconto = preco * 0.1;
  const precoComDesconto = preco - desconto;

  const result = document.getElementById("resultado");
  result.innerHTML = `
    Preço original do produto era de R$${preco}
    <br />
    Você acaba de ganhar R$${desconto} de desconto (-10%)
    <br />
    No fim, você vai pagar R$${precoComDesconto}
    `;
}
