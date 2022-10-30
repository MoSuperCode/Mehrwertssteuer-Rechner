function setNettoBruttoText(text) {
    document.getElementById("nettoBruttoText").innerHTML = text;
}


function calculate() {
    let steuersatz;
    let steuer13 = document.getElementById("steuer13").checked;
    let steuer20 = document.getElementById("steuer20").checked;
    const zahl = Number(document.getElementById("zahl").value);

    //
    if (steuer13 === true) {
        steuersatz = 1.13;
    }
    else if (steuer20 === true) {
        steuersatz = 1.20;
    } else {
        console.log("Wähle einen Steuersatz aus!");
    }
    console.log({ steuersatz, zahl });
    //
    let cbNetto = document.getElementById("Netto").checked;
    let cbBrutto = document.getElementById("Brutto").checked;

    const endpreis = document.getElementById("endpreis");

    const mwstBetrag = document.getElementById("mwstBetrag");
    let ergebnis, mwstErgebnis;

    if (cbNetto === true) {
        ergebnis = zahl * steuersatz;
        endpreis.innerHTML = `Bruttobetrag:<br> ${ergebnis.toFixed(2)}€`;
        mwstErgebnis = ergebnis - zahl;
        mwstBetrag.innerHTML = `Mehrwertsteuerbetrag ${mwstErgebnis.toFixed(2)} €`;
    } else if (cbBrutto === true) {
        ergebnis = zahl / steuersatz;
        endpreis.innerHTML = `Nettobetrag: ${ergebnis.toFixed(2)}€`;
        mwstErgebnis = zahl - ergebnis;
        mwstBetrag.innerHTML = `Mehrwertsteuerbetrag ${mwstErgebnis.toFixed(2)} €`;
    } else {
        console.log("Wähle aus was berechnet werden soll!");
    }
    //


    console.log(endpreis);


}
