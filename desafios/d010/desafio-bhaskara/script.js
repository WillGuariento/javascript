function calcular() {
  const a = parseInt(prompt("Digite o valor de a:"));
  const b = parseInt(prompt("Digite o valor de b:"));
  const c = parseInt(prompt("Digite o valor de c:"));

  const delta = Math.pow(b, 2) - 4 * a * c;

  const result = document.getElementById("resultado");
  result.innerHTML = `
        A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong>.
        <br />
        O cálculo realizado será <strong>Δ = ${b}² - 4 * ${a} * ${c}</strong>.
        <br />
        O valor coalculado foi <strong>Δ = ${delta}</strong>.`;
}
