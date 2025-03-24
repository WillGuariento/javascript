function clicou() {
  var celsius = parseFloat(prompt("Digite uma temperatura em ºC (Celsius)"));

  var conver = document.getElementById("conversor");
  conver.innerHTML = `A temperatura de ${celsius}ºC, corresponde a...`;

  var kelvin = celsius + 273.15;
  var fahrenheit = celsius * 1.8 + 32;

  var result = document.getElementById("resultado");
  result.innerHTML = `
    ${kelvin.toFixed(2)}ºK (Kelvin) 
    <br />
    ${fahrenheit.toFixed(2)}ºF (Fahrenheit)
    `;
}
