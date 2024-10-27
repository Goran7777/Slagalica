let recHtml = document.getElementById("rec");
let poruka = document.getElementById("poruka");

const Slagalica = function (rec, ostaloPokusaja) {
  this.rec = rec.toLowerCase().split("");
  this.ostaloPokusaja = ostaloPokusaja;
  this.pokusanaSlova = [];
  this.status = "u-toku";
};

Slagalica.prototype.izracunajStatus = function () {
  const zavrsenoUspesno = this.rec.every((slovo) =>
    this.pokusanaSlova.includes(slovo)
  );
  if (this.ostaloPokusaja === 0) {
    this.status = "neuspeh";
  } else if (zavrsenoUspesno) {
    this.status = "uspeh";
  } else {
    this.status = "u-toku";
  }
};

Slagalica.prototype.vratiStatusPoruke = function () {
  if (this.status === "u-toku") {
    return `Ostalo pokusaja: ${this.ostaloPokusaja}`;
  } else if (this.status === "neuspeh") {
    return `Dobar pokusaj!Rec je bila ${this.rec.join("")}.`;
  } else {
    return "Sjajno!Pogodili ste zadatu rec ! ! !";
  }
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

Slagalica.prototype.napraviPokusaj = function (pokusaj) {
  pokusaj = pokusaj.toLowerCase();
  const jelJedinstven = !this.pokusanaSlova.includes(pokusaj);
  const jelLosPokusaj = !this.rec.includes(pokusaj);
  if (this.status !== "u-toku") {
    return;
  }
  if (jelJedinstven) {
    this.pokusanaSlova.push(pokusaj);
  }
  if (jelJedinstven && jelLosPokusaj) {
    this.ostaloPokusaja--;
  }
  this.izracunajStatus();
};

const igra1 = new Slagalica("tri", 2);
recHtml.textContent = igra1.vratiSlagalicu();
window.addEventListener("keypress", function (e) {
  let recHtml = document.getElementById("rec");
  const pokusaj = String.fromCharCode(e.charCode);
  igra1.napraviPokusaj(pokusaj);
  recHtml.textContent = igra1.vratiSlagalicu();
  poruka.textContent = igra1.vratiStatusPoruke();
});
