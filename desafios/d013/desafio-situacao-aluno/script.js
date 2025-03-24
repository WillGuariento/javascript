function calcular() {
  const nome = prompt("Qual o nome do aluno?");
  const nota1 = parseFloat(prompt(`Primeira nota de ${nome}:`));
  const nota2 = parseFloat(prompt(`Segunda nota de ${nome}:`));

  const media = (nota1 + nota2) / 2;

  const res = document.getElementById("resultado");
  let mensagem = `<strong>Analisando a situação de ${nome}</strong><br />`;

  if (media > 6) {
    mensagem += `
        Com as notas ${nota1} e ${nota2}, <strong>a média é ${media}</strong><br />
        Com média acima de 6.0, o aluno está <span style="color: green">APROVADO</span>`;
  } else if (media > 3 && media <= 6) {
    mensagem += `
        Com as notas ${nota1} e ${nota2}, <strong>a média é ${media}</strong><br />
        Com média entre 3.0 e 6.0, o aluno está em <span style="color: orange">RECUPERAÇÃO</span>`;
  } else {
    mensagem += `
        Com as notas ${nota1} e ${nota2}, <strong>a média é ${media}</strong><br />
        Com média abaixo de 3.0, o aluno está <span style="color: red">REPROVADO</span>`;
  }

  res.innerHTML = mensagem;
}
