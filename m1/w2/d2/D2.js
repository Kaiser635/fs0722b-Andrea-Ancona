/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
Stringa = un valore inserito tra le virgolette es. var x = 'Ciao'
Numerico = un valore numerico senza virgolette es var x = 18;
Booleano = un valore true o false es. var x = true/false
Array = una serie di valori inseriti in una quadra separati da una virgola es. var x =[23, 'ciao']
Oggetto = serie di valori inseriti in craffe es. var x = {name: 'Andrea}
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var name = 'Andrea'
//Andrea ha valore di stringa perchè è compreso nei doppi apici



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
var numero1 = 12;

var numero2 = 20;

var numero3 = (numero1 + numero2);

console.log(numero3);
document.write(numero3);



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
var x = 12;
console.log(x);
document.write(x);


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
var name = 'Ancona' //la variabile var può essere ridichiarata cambiando il valore al suo interno
console.log(name)
document.write(name);

//const name = 'Ancona';
//console.log(name)
/* la variabile const non può essere ridichiarata e su console.log apparirà Error: Identifier 'name' has already been declared */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
var y = 4;

var x = 12;

var t = (y - x);

console.log(t) //risultato t = -8
document.write(t);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'jonh'
let nme2 = 'Jonh'
name3 = (name1 == name2);
console.log(name3)
document.write(name3);


/* Risultato FALSE perchè il valore di name1 è diverso da name2 che ha la lettera maiuscola */



//EXTRA:
//in questo caso abbiamo detto se name1 è uguale sia nel valore che nel tipo a name2. Tutte e due in minuscolo con la proprietà .toLowerCase



name1 = 'jonh';
name2 = 'Jonh';

if (name1.toLowerCase === name2.toLowerCase){
  console.log('true')
}else{
  console.log('falso')
}





