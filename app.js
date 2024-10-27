let recHtml = document.getElementById("rec");
let izgubio = document.getElementById("izgubio");
let pokusajiHtml = document.getElementById("pokusaji");
let alert = document.getElementById("alert");
let pobeda = document.getElementById("pobeda");

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

Slagalica.prototype.napraviPokusaj = function (pokusaj) {
  const uspesnoZavrseno = this.rec.every((slovo) =>
    this.pokusanaSlova.includes(slovo)
  );
  console.log(uspesnoZavrseno);

  pokusaj = pokusaj.toLowerCase();
  const jelJedinstven = !this.pokusanaSlova.includes(pokusaj);
  const jelLosPokusaj = !this.rec.includes(pokusaj);
  if (jelJedinstven) {
    this.pokusanaSlova.push(pokusaj);
  }
  if (!jelJedinstven) {
    alert.textContent = "Dupliras slovo!";
    setInterval(function () {
      alert.textContent = "";
    }, 2000);
  }

  if (jelJedinstven && jelLosPokusaj) {
    if (!this.ostaloPokusaja <= 0) {
      this.ostaloPokusaja--;
    } else {
      return;
    }
  }
  if (uspesnoZavrseno) {
    pobeda.textContent = "Cestitamo!Pogodili ste zadatu rec! ! !";
  }
  if (this.ostaloPokusaja === 0) {
    izgubio.textContent = "Izgubili ste igru,osvezite stranu,pokusajte ponovo!";
  }
  console.log(this.pokusanaSlova);
};

const igra1 = new Slagalica("tri", 2);
recHtml.textContent = igra1.vratiSlagalicu();
pokusajiHtml.textContent = `Ostalo pokusaja: ${igra1.ostaloPokusaja}`;
window.addEventListener("keypress", function (e) {
  let recHtml = document.getElementById("rec");
  let pokusajHtml = document.getElementById("pokusaji");
  const pokusaj = String.fromCharCode(e.charCode);
  igra1.napraviPokusaj(pokusaj);
  recHtml.textContent = igra1.vratiSlagalicu();
  pokusajHtml.textContent = `Ostalo pokusaja: ${igra1.ostaloPokusaja}`;
});
