//TODO 1. Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//TODO Stampare a schermo la bici con peso minore.

var parcoBici = [
    {
        nome : 'ktm',
        peso : 10
    },
    {
        nome : 'torpado',
        peso : 15
    },
    {
        nome : 'bianchi',
        peso : 6
    }
];

//* Controllo qual'è la più leggera
var pesoMin = parcoBici[0];

for(var i = 1; i < parcoBici.length; i++){
    if(parcoBici[i].peso < pesoMin.peso){
        pesoMin = parcoBici[i];
    }
}

//* Stampo a schermo la più leggera
console.log(pesoMin);





//TODO 2. Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
//TODO Calcola quanto pesano tutte le zucchine.







//TODO 3. Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine