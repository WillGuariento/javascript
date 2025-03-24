function clicou() {
  var result = document.getElementById("resultado");
  var medida = document.getElementById("medida");
  const novoCalculo = document.getElementById("novoCalculo");

  var m = parseFloat(prompt("Digite uma distância em metros (m)"));

  var km = m / 1000;
  var hm = m / 100;
  var dam = m / 10;
  var dm = m * 10;
  var cm = m * 100;
  var mm = m * 1000;

  medida.innerHTML = `A distância de ${m.toFixed(
    2
  )} metros, corresponde a...<br />`;

  result.innerHTML = `
  ${km.toFixed(2)} quilômetros (Km) <br />
  ${hm.toFixed(2)} hectômetros (Hm) <br />
  ${dam.toFixed(2)} decâmetros (Dam) <br />
  ${dm.toFixed(2)} decímetros (dm) <br />
  ${cm.toFixed(2)} centímetros (cm) <br />
  ${mm.toFixed(2)} milímetros (mm)
  `;

  novoCalculo.style.display = "block";
}
