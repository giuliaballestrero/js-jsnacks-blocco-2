
/***
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
    * 
*/

const number = parseInt (prompt ('Inserisci un numero'));

if ((number % 2) == 0) {
    console.log(number);

} else if ((number % 2) == 1) {
    console.log(number + 1);
}
