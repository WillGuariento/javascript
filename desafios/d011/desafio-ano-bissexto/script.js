function verificar() {
  const ano = parseInt(prompt("Qual ano você quer verificar?"));

  const res = document.getElementById("resultado");
  res.innerHTML = `<p><strong>Analisando o ano de ${ano}...</strong></p>`;
  if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
    res.innerHTML += `<p>O ano de ${ano} é bissexto!</p>`;
  } else {
    res.innerHTML += `<p>O ano de ${ano} <strong>não é bissexto!</strong></p>`;
  }
}
