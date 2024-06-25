//Calcolo Prezzo

const PrezzoOriginale = 300;
console.log(PrezzoOriginale);

const Età = parseInt(prompt("Età?"));
console.log(Età);

let Totale = PrezzoOriginale;
console.log(Totale);

if (Età < 18) {
    const Min = PrezzoOriginale * 0.20;
    Totale = PrezzoOriginale - Min;
}

else if (Età > 65) {
    const Mag = PrezzoOriginale * 0.40;
    Totale = PrezzoOriginale - Mag;
}

document.getElementById("Risultato").innerHTML = "Prezzo:" + Totale.toFixed(2) + "€";