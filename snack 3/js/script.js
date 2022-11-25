
/***
Calcola la somma dei primi 10 numeri di un array.
Calcola la loro media,
Calcola il valore massimo dei primi 10 numeri di un array.
    * 
*/


const numbers = [ 1, 42, 3, 4, 50, 6, 17, 8, 9, 10, 11, 15];
console.log (numbers);

let sum = 0;
let max = 0;

for (let i = 0; i < 10; i++) {
    sum = sum + numbers[i];
    
    if (max < numbers[i]) {
        max = numbers[i];
    }

}

console.log(sum);

let media = (sum / 10);
console.log(media);

console.log(max);