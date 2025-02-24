function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    //BOM DIA
    img.src = "./images/MANHA.png";
    document.body.style.background = "lightgoldenrodyellow";
  } else if (hora >= 12 && hora <= 18) {
    //BOA TARDE
    img.src = "./images/TARDE.png";
    document.body.style.background = "lightsalmon";
  } else {
    //BOA NOITE
    img.src = "./images/NOITE.png";
    document.body.style.background = "lightslategray";
  }
}
