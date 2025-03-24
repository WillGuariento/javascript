function verificar() {
  const precoAntigo = parseFloat(prompt("Qual o preço anterior do produto?"));
  const precoAtual = parseFloat(prompt("Qual o preço atual do produto?"));

  const res = document.getElementById("resultado");
  let mensagem = `O produto custava R$${precoAntigo.toFixed(
    2
  )} e agora custa R$${precoAtual.toFixed(2)}.<br />`;

  const dif = precoAtual - precoAntigo;
  const variacao = (Math.abs(dif) / precoAntigo) * 100;

  if (precoAntigo > precoAtual) {
    mensagem += `
        Hoje o produto está mais barato. <br />
        O preço caiu R$${Math.abs(dif).toFixed(
          2
        )} em relação ao preço anterior. <br />
        Uma variação de ${variacao.toFixed(2)}% para baixo.
    `;
  } else if (precoAntigo < precoAtual) {
    mensagem += `
        Hoje o produto está mais caro. <br />
        O preço subiu R$${dif.toFixed(2)} em relação ao preço anterior. <br />
        Uma variação de ${variacao.toFixed(2)}% para cima.
    `;
  } else {
    mensagem += "O preço permaneceu o mesmo!";
  }

  res.innerHTML = mensagem;
}
