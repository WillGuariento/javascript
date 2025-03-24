function clicou() {
  var produto = prompt("Que produto você está comprando?");
  var preco = parseFloat(
    prompt(`Quanto custa ${produto} que você quer comprar?`)
  );
  var valor = parseFloat(
    prompt(`Qual foi o valor que você deu para pagar o ${produto}`)
  );

  var troco = valor - preco;
  alert(`
    Você comprou:
    ${produto} que custou R$${preco.toFixed(2)}.
    Deu R$${valor.toFixed(2)} em dinheiro e vai receber R$${troco.toFixed(
    2
  )} de troco.
    Volte Sempre!`);
}
