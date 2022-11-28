
/**
 *
 * Generatore di persone fittizie casuali:
 * Il Grande Gatsby ha una lista di nomi e una lista di cognomi, da queste vuole generare una falsa lista di invitati con nome e cognome.
 *
 */

 const names = ['Michela', 'Giuseppina', 'Taylor','Donna', 'Marsha', 'Fabio', 'Roberto'];
 const lastnames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];
 const guests = [];

while (guests.length < 15) {
const randomNames = Math.floor (Math.random () * (names.length));
const randomLastnames = Math.floor (Math.random () * (lastnames.length));

const guest = names[randomNames] + " " + lastnames[randomLastnames];

guests.push(guest)

}

console.log(guests);
 