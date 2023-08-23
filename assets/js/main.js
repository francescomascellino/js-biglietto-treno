/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca nella documentazione di JS. 
*/

// prompt km 
// prompt età 
// if km o età isNaN messaggio di errore 
// se l'età è inferiore a 18 sconto del 20% su 0.21 * km
// se l'età è maggiore a 65 sconto del 40% su 0.21 * km

const button = document.getElementById("generatePrice");

button.addEventListener("click", function priceCalc() {
    const distance = Number(prompt("Inserisci la distanza da percorrere"));

    console.log("la distanza da percorrere è: " + distance);

    const age = Number(prompt("Inserisci l'età del passeggero"))

    console.log("l'età del passeggero è: " + age);


    if (isNaN(distance) || isNaN(age) || age > 100) {
        alert("Per favore inserisci un valore numerico valido")
    } else {
        const price = distance * 0.21;
        console.log("Il prezzo è " + price)
    }

});
