let recHtml = document.getElementById("rec");
let pokusajiHtml = document.getElementById("pokusaji");
let alert = document.getElementById("alert");
let izgubio = document.getElementById("rec");

const Slagalica = function (rec, ostaloPokusaja) {
  this.rec = rec.toLowerCase().split("");
  this.ostaloPokusaja = ostaloPokusaja;
  this.pokusanaSlova = [];
};

Slagalica.prototype.vratiSlagalicu = function () {
  let slagalica = "";
  this.rec.forEach((slovo) => {
    if (this.pokusanaSlova.includes(slovo) || slovo === " ") {
      slagalica += slovo;
    } else {
      slagalica += "*";
    }
  });

  return slagalica;
};

const igra1 = new Slagalica("vrabac", 5);
recHtml.textContent = igra1.vratiSlagalicu();
