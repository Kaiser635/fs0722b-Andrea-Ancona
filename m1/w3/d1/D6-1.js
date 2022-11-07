/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
area(4,5);

function area(l1,l2){

   
    let area1 = l1 * l2;
    console.log("L'area del rettangole è " + area1)

}
/*SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

crazySum(6,6);

function crazySum(num1,num2){   
    
    if (num1 === num2){
        console.log((num1 + num2) * 3)
    }else{
        console.log(num1 + num2)
    }

}





/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
crazyDiff(16)

function crazyDiff(num3){
    

    if(num3 > 19){
        console.log((num3 - 19) * 3)
    }else{
        console.log(num3 - 19)
    }

}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
boundary(56)

function boundary(n){
    if(n >= 20 && n <= 100){
        console.log(n + ' è compreso tra 20 e 100')
    }else if(n === 400){
        console.log(n + ' è ugale a 400')
    }else{
        console.log(n + ' è minore di 20')
    }
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.



function epify(str){

    if(stringa === 'EPICODE'){
        console.log(str)
    }else{
        console.log(stringa)
    }
    console.log(str)
    
}

epify('WEB DEVELOPER')*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function chek3and7(x){
    if(x % 3 == 0 && x > 0){
        console.log(x + ' è un multipo di 3');
    }else if(x % 7 == 0 && x > 0){
        console.log(x + ' è un multipo di 7');
    }else{
        console.log(x + ' non è un multiplo di 3 e 7');
    }
}

chek3and7(80);


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")

function reverseString(str){
    let strReversed = [];//serve a contenere i caratteri di str in ordine inverso
    let rev = '';//conterrà la stringa invertita

    for(let i = 0 ; i < str.length;i++){
        strReversed[i] = str[str.length - 1 - i];
        rev += strReversed[i];
    }return rev
}

console.log(reverseString('EPICODE'))*/

const reverseString = function(str){
    let splitString = str.split('')
    let revereString = splitString.reverse()
    let finalString = revereString.join('')
    return finalString
}
console.log(reverseString('EPICODE'))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
 

function upperFirst(str){
    var maiuscola = str.replace('c','C')
    
    return maiuscola;
   
}

console.log(upperFirst('ciao mi sono appena iscritto!'))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(str){
    let stringaMozzata = str.slice(1,-1)
    return stringaMozzata;
}

console.log(cutString('Andrea'))




/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n,...altro){
   
    var numeri = new Array(...altro)
    return numeri

}
console.log(giveMeRandom(2,5,6,8,9))


/* SCRIVI QUI LA TUA RISPOSTA */
