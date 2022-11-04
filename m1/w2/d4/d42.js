const starWarsCharacters = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "427",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male"
    },
    {
      name: "C-3PO",
      height: "23",
      mass: "10",
      hair_color: "n/a",
      skin_color: "gold",
      eye_color: "yellow",
      birth_year: "112BBY",
      gender: "n/a"
    },
    {
      name: "R2-D2",
      height: "96",
      mass: "23",
      hair_color: "n/a",
      skin_color: "white, blue",
      eye_color: "red",
      birth_year: "33BBY",
      gender: "n/a"
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "10",
      hair_color: "none",
      skin_color: "white",
      eye_color: "yellow",
      birth_year: "41.9BBY",
      gender: "male"
    },
    {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "19BBY",
      gender: "female"
    },
    {
      name: "Owen Lars",
      height: "178",
      mass: "120",
      hair_color: "brown, grey",
      skin_color: "light",
      eye_color: "blue",
      birth_year: "52BBY",
      gender: "male"
    },
    {
      name: "Beru Whitesun lars",
      height: "165",
      mass: "75",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "blue",
      birth_year: "47BBY",
      gender: "female"
    },
    {
      name: "R5-D4",
      height: "97",
      mass: "32",
      hair_color: "n/a",
      skin_color: "white, red",
      eye_color: "red",
      birth_year: "unknown",
      gender: "n/a"
    },
    {
      name: "Biggs Darklighter",
      height: "183",
      mass: "84",
      hair_color: "black",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "24BBY",
      gender: "male"
    },
    {
      name: "Obi-Wan Kenobi",
      height: "182",
      mass: "77",
      hair_color: "auburn, white",
      skin_color: "fair",
      eye_color: "blue-gray",
      birth_year: "57BBY",
      gender: "male"
    }
  ];
  
  
  
  
  /* ESERCIZIO 1
  Crea una variabile chiamata "characters" e inserisci un array vuoto
  */
  let characters = [];
  console.log(characters)
  
  
  /* ESERCIZIO 2
  Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla proprietà "name". 
  Usa il valore contenuto inserendolo nell'array creato precedentemente. 
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
  */

  for(let i = 0;i < starWarsCharacters.length;i++){
    
    let name = starWarsCharacters[i].name;
    characters.push(name)
    
  }

  /* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" e inserisci un oggetto con questa struttura: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/

let femaleCharacters = new Array ({
    name: 'Leila Organa',
    hair_color: "brown", 
    eye_color: "brown"

  });

  console.log(femaleCharacters)

  /* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia come proprietà: blue, yellow, brown, red, blue-gray.
  ognuna di queste proprietà contiene un array vuoto
*/

let eyeColor = {
    blue: [],
    yellow: [],
    brown: [],
    red: [],
    blueGray: []
  
  }

  /* ESERCIZIO 5
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array corrispondente al colore dei loro occhi nell'oggetto "eyeColor" precedentemente creato
  Utilizza uno switch statement per determinare in quale proprietà inserire il personaggio
  */

  for(let i = 0;i < starWarsCharacters.length;i++){
    let occhi = starWarsCharacters[i];
    switch(occhi.eye_color){
        case 'blue':
            eyeColor.blue.push(occhi)
            break;
        case 'yellow':
            eyeColor.yellow.push(occhi)
            break;
        case 'brown':
            eyeColor.brown.push(occhi)
            break
        case 'red':
            eyeColor.red.push(occhi)
            break
        case 'blue-gray':
            eyeColor.blueGray.push(occhi)
            break
    }
  }

  console.log(eyeColor)

  /* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio
  */
  
let j = 0
let somma = 0


while(j < starWarsCharacters.length){
  somma += parseInt(starWarsCharacters[j].mass)
  j++
  
}

console.log(somma)

/* ESERCIZIO 7

Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)

Se la massa è inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa è uguale a 500 stampa in console: "Ship is half loaded",
Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"

Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

function dd(){
    
}
switch(true){
    case somma < 500:
        console.log("Ship is under loaded");
        break;
        case somma == 500:
        console.log("Ship is half loaded");
        break;
        case somma > 700 && somma < 900:
        console.log("Warning: Load is over 700");
        break
        case somma > 900 && somma < 1000:
        console.log("Critical Load: Over 900");
        break;
        case somma > 1000:
        console.log("DANGER! OVERLOAD ALERT: Jump ship now!");
        break;
}

const f = [1,2,3]
result = myArrey(2)


  


  