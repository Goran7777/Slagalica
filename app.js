let recHtml = document.getElementById("rec");
let poruka = document.getElementById("poruka");
const igra1 = new Slagalica("vrabac", 6);

recHtml.textContent = igra1.vratiSlagalicu();
poruka.textContent = igra1.vratiStatusPoruke();
// keypress
window.addEventListener("keypress", function (e) {
  const pokusaj = String.fromCharCode(e.charCode);
  igra1.napraviPokusaj(pokusaj);
  recHtml.textContent = igra1.vratiSlagalicu();
  poruka.textContent = igra1.vratiStatusPoruke();
});
