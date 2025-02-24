function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var finalAno = document.getElementById("txtano");
  var res = document.getElementById("res");

  if (finalAno.value.length == 0 || finalAno.value > ano) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementById("radsex");
    var idade = ano - Number(finalAno.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "./images/crianca-m.png");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "./images/jovem-m.png");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "./images/adulto-m.png");
      } else {
        //idoso
        img.setAttribute("src", "./images/idoso-m.png");
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "./images/crianca-f.png");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "./images/jovem-f.png");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "./images/adulto-f.png");
      } else {
        //idoso
        img.setAttribute("src", "./images/idoso-f.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
