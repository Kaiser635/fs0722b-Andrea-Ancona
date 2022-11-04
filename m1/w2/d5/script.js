
//FUNZIONE PER BOTTONI RESTITUISCONO VALORE INSERITO
function oper(elemento){

    document.getElementById('calcolo').value += elemento.getAttribute('data-simbolo');


}

//FUNZIONE PER OTTENERE IL RISULTATO
function rit(){

let numeri = document.getElementById('calcolo') ;
numeri.value = eval(numeri.value)   
console.log(numeri.value)
}

//FUNZIONE PER CANCELLARE IL CONTENUTO
function canc(){
    document.getElementById('calcolo').value = "";
    
}

//FUNZIONE RADICE QUADRATA
function rad(){
    let radice = document.getElementById('calcolo');
    radice.value = Math.sqrt(radice.value)
    

}

//FUNZIONE PI GRECO
function piG(){
    document.getElementById('calcolo').value += parseFloat(Math.PI) ;
    
}






