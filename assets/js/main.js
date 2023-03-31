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

let sceltaUtente = prompt('scegli pari o dispari')
let numeroUtente = parseInt( prompt('Inserisci un numero da 1 a 5') )
let numeroPc = NumeroRandom( 1, 5 );

console.log( ` scelta utente: ${sceltaUtente}` )
console.log( ` numero pc: ${numeroPc}` )
console.log( ` numero utente: ${numeroUtente}` )

let somma = numeroPc + numeroUtente;
console.log(` somma numeri: ${somma}` )

if( pariDispari(somma) == sceltaUtente) {
    console.log( `ha vinto l' utente`)
} else {
    console.log(` ha vinto il Pc`)
}

function pariDispari(x) {
    if( x % 2 ==0 ) {
        return 'pari'
    } else {
        return 'dispari'
    }
}

function NumeroRandom(min, max) {
    return Math.floor( Math.random() * max ) + min
}