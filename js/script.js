//TODO SNACK 1. Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
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





//TODO SNACK 2. Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
//TODO Calcola quanto pesano tutte le zucchine.


var zucchine = [
    {
        varieta : 'a',
        peso : 100,
        lunghezza : 10
    },
    {
        varieta : 'b',
        peso : 250,
        lunghezza : 18
    },
    {
        varieta : 'c',
        peso : 300,
        lunghezza : 20
    },
    {
        varieta : 'd',
        peso : 180,
        lunghezza : 15
    },
    {
        varieta : 'e',
        peso : 140,
        lunghezza : 12
    },
    {
        varieta : 'f',
        peso : 400,
        lunghezza : 25
    },
    {
        varieta : 'g',
        peso : 500,
        lunghezza : 30
    },
    {
        varieta : 'h',
        peso : 380,
        lunghezza : 22
    },
    {
        varieta : 'i',
        peso : 130,
        lunghezza : 11
    },
    {
        varieta : 'l',
        peso : 600,
        lunghezza : 35
    }
];

var pesoTot = 0;
for(var i = 0; i < zucchine.length; i++){
    pesoTot += zucchine[i].peso;
}

console.log('peso totale zucchine = ' + pesoTot + 'gr');






//TODO SNACK 3. Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine

var zucchineNew = [
    {
        varieta : 'a',
        peso : 100,
        lunghezza : 10
    },
    {
        varieta : 'b',
        peso : 250,
        lunghezza : 18
    },
    {
        varieta : 'c',
        peso : 300,
        lunghezza : 20
    },
    {
        varieta : 'd',
        peso : 180,
        lunghezza : 15
    },
    {
        varieta : 'e',
        peso : 140,
        lunghezza : 12
    },
    {
        varieta : 'f',
        peso : 400,
        lunghezza : 25
    },
    {
        varieta : 'g',
        peso : 500,
        lunghezza : 30
    },
    {
        varieta : 'h',
        peso : 380,
        lunghezza : 22
    },
    {
        varieta : 'i',
        peso : 130,
        lunghezza : 11
    },
    {
        varieta : 'l',
        peso : 600,
        lunghezza : 35
    }
];

var zucchineCorte = [];
var zucchineLunghe = [];

//* divido le zucchine in due gruppi a sezonda della lunghezza
for(var i = 0; i < zucchineNew.length; i++){
    if (zucchineNew[i].lunghezza < 15){
        zucchineCorte.push(zucchineNew[i]);
    }
    else{
        zucchineLunghe.push(zucchineNew[i]);
    }
}

//* calcolo il peso complessivo dei due gruppi e lo mostro a schermo
console.log('Il gruppo delle zucchine corte pesa in totale ' + calcoloPeso(zucchineCorte) + 'gr');
console.log('Il gruppo delle zucchine lunghe pesa in totale ' + calcoloPeso(zucchineLunghe) + 'gr');








//! SEZIONE PER LE FUNZIONI
function calcoloPeso(arrayObject){
    var somma = 0;
    for(var i = 0; i < arrayObject.length; i++){
        somma += arrayObject[i].peso;
    }
    return somma;
}