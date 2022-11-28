
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
 
const numbers = [2, 5, 9, 4, 12, 7 ];
let somma = 0;

for ( let i = 0; i < numbers.length; i++) {
    if (i % 2 === 1) {
        somma += numbers[i];
    }
}

console.log(somma)  ;