class Slagalica {
  constructor(rec, ostaloPokusaja) {
    this.rec = rec.toLowerCase().split("");
    this.ostaloPokusaja = ostaloPokusaja;
    this.pokusanaSlova = [];
    this.status = "u-toku";
  }
  izracunajStatus() {
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
  }
  vratiStatusPoruke() {
    if (this.status === "u-toku") {
      return `Ostalo pokusaja: ${this.ostaloPokusaja}`;
    } else if (this.status === "neuspeh") {
      return `Dobar pokusaj!Rec je bila ${this.rec.join("")}.`;
    } else {
      return "Sjajno!Pogodili ste zadatu rec ! ! !";
    }
  }
  vratiSlagalicu() {
    let slagalica = "";
    this.rec.forEach((slovo) => {
      if (this.pokusanaSlova.includes(slovo) || slovo === " ") {
        slagalica += slovo;
      } else {
        slagalica += "*";
      }
    });
    return slagalica;
  }
  napraviPokusaj(pokusaj) {
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
  }
}
