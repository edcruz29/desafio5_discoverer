var data = "2021/12/25";
var falta = (new Date(data).getTime() - new Date().getTime()) / 1000;
var segundos = Math.round(falta % 60);
var minutos = Math.round((falta / 60) % 60);
var horas = Math.round((falta / 60 / 60) % 24);
var dias = Math.round(falta / 60 / 60 / 24);
horas = horas < 10 ? "0" + horas : horas;
minutos = minutos < 10 ? "0" + minutos : minutos;
segundos = segundos < 10 ? "0" + segundos : segundos;
var divs = document.querySelectorAll("#falta");

setInterval(function () {
  if (segundos == 0) {
    segundos = 60;
    minutos--;
  }
  if (minutos == 0) {
    minutos = 60;
    horas--;
  }
  if (horas == 0) {
    horas = 24;
    dias--;
  }
  segundos--;
  var contador = [dias, horas, minutos, segundos].forEach(function (
    parcela,
    i
  ) {
    divs[i].innerHTML = parcela;
  });
}, 1000);
