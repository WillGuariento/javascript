function reajustar() {
  const nome = prompt("Digite o nome do funcionário: ");
  const salario = parseFloat(prompt("Digite o salario do funcionário: "));
  const reajuste = parseFloat(
    prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
  );

  const reajusteValor = salario * (reajuste / 100);
  const novoSalario = salario + salario * (reajuste / 100);

  const result = document.getElementById("resultado");
  result.innerHTML = `
    O salário de ${nome} era de R$${salario.toFixed(2)}.
    <br />
    com um aumento de ${reajuste}%, o salário vai aumentar ${reajusteValor.toFixed(
    2
  )}
    <br />
    E a partir daí, ${nome} vai passar a ganhar R$${novoSalario.toFixed(2)}`;
}
