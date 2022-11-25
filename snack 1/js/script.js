
/***
    Crea un array vuoto.
    Chiedi per 6 volte all'utente di inserire un numero,
    se è dispari inseriscilo nell'array.
    * 
*/

const listNumbers = [];
console.log(listNumbers);

for (let i = 0 ; i < 6 ; i++ ) {
const number = parseInt (prompt ('Inserisci un numero'));

if ((number % 2) == 1) {
    listNumbers.push(number);
    console.log(listNumbers);
}
}

console.log(listNumbers);