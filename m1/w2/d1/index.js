alert('Controlliamo se puoi bere!!')




function drink() {
    x = document.getElementById('ageinput').value;//var. che prende il valore inserito in input

    
    //funzione if
    if (x < 18){
        document.getElementById('ageoutput').innerHTML = "Tu non puoi bere..!!"//risultato nel div con id=output
    }else{
        document.getElementById('ageoutput').innerHTML = "Tu puoi bere e ubriacarti..!!"
    }
}