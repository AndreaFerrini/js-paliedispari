/* esercizio 1: Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

let parola = prompt("Inserisci una parola");

function Palindroma(){
    let palindroma = '';

    for (let i = parola.length - 1; i >= 0; i--) {
        palindroma += parola[i];
    }
    return palindroma;
}

if (parola == Palindroma()) {
    console.log(`la parola: ${parola} è palindroma`);
}else {
    console.log(`la parola: ${parola} non è palindroma`);
}

/*esercizio 2: Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/