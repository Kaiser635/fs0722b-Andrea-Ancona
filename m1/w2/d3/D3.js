/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let x = 20

let y = 7

if(x > y){
  console.log('x è il numero più grande')
}else if(y > x){
  console.log('y è il numero piu grande')
}else{
  console.log('x e y sono uguali')
}



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let z = 10;

if(z != 5){
  console.log('z not equal da 5')
}else{
  console.log('z equal da 5')
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let t = 30;

if(t % 5 == 0){
  console.log('questo numero è divisibile per 5')
}else{
  console.log('non è divisibile')
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let numero =  16;

let numero2 = 8;

if (numero - numero2 == 8){
  console.log('Risulato: 8')
}else{
  console.log('Diverso da 8')
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 30;
let spedizione = 10;

  
 

if (totalShoppingCart >= 50){
  console.log('Non devi pagare la spedizione di 10€')
}else{
  console.log(spedizione += totalShoppingCart)
}

/*let totalShoppingCart = 45;
let shippingCost = 10;
let ammountToPay = totalShoppingCart 

if(totalShoppingCart < 50){
  ammountToPay += shippingCost
}
console.log('totale da pagare:',ammountToPay)*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

  
 


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
var f = 10;
var d = 20;
var l = 30;

if(l > d && l > f){
  console.log('30 è il numero piu alto')

}else if(d > f && d > f){
  console.log('20 è piu piccolo di 30 ma piu grande di 10')
}else{
  console.log('10 è il numero piu grande')
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
var p = 25;

if(typeof p === 'number'){
  console.log('è un numero')
}else{
  console.log('non è un numero')
}

//risultato number


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
var q = 20;

if(q % 2 == 0){
  console.log('Numero Paro')
}else{
  console.log('Disparo')
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  let val = 10
  if (val <= 7) {
    console.log("Meno di 10");
  } else if (val > 5) {
      console.log("Maggiore di 5");
    } else {
      console.log("Uguale a 7 o minore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  
}
me.city = 'Toronto'
console.log(me)



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2]
console.log(me)



/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
var arr = []

arr = new Array(1,2,3,4,5,6,7,8,9,10);
console.log(arr)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
arr.pop(10)
arr.push(100);
console.log(arr)

