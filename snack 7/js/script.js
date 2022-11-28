
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
 
//creo una lista della spesa
const shoppingList = [ 
    'pane',
    'latte',
    'uova',
    'rosmarino',
    'paprika',
    'guanciale',
    'vino'
]

//indico l'elemento del DOM che voglio andare a modificare
const ulElement = document.querySelector('ul.list-group');
let i= 0;

//scorro gli elementi della lista fino alla fine
while (i < shoppingList.length) {
    
    //creo un list item
    const newLiElement = document.createElement('li');

    //assegno una classe al mio list item
    newLiElement.classList.add('list-group-item');

    //dico al mio list item di avere come contenuto un indice della lista della spesa
    newLiElement.innerText = shoppingList[i];

    //appendo l'elemento list item alla ul del DOM
    ulElement.append(newLiElement);

    i++;
};