//RICHIAMO L'ID DEL BOTTONE
document.querySelector('#invio')

//AL CLICK SCATENO LA FUNZIONE CON EVENT LISTNER
.addEventListener('click', function(){

            let testo = document.querySelector('#task1'); //RICHIAMO L'ID DELL'INPUT
            
            let div = document.createElement('div');//CREO UN DIV E LO INSERISCO NELLA CLASSE TODO PER CSS
            div.classList.add('todo')
            
            let span = document.createElement('span');//CREO UN TAG SPAN PER SEPARARE IL TESTO DAL BOTTONE
            span.textContent = testo.value;//ALL'INTERNO DI SPAN ANDRA IL CONTENUTO INSERITO IN INPUT

            let completato = document.createElement('button');//CREO IL BOTTONE 
            completato.textContent = 'Completa';


            //IL BOTTONE APPENA CREATO AL CLICK ESEGUIRA UNA FUNZIONE
            
            completato.addEventListener('click', ()=> {
                div.classList.add('completato');//DO AL BOTTONE UNA CLASSE AGGIUNTIVA PER IL CSS
                document.querySelector('#lista-completati').append(div);//RICHIAMO IL DIV CON ID LISTA COMPLETATI E LO INSERISCO NEL DIV
                
            })

            div.append(span, completato);//INSERISCO SPAN E IL BOTTONE NEL DIV
            document.querySelector('#lista').append(div);
        

            testo.value = ''; //UTILIZZO TESTO.VALUE PER CANCELLARE IL CONTENUTO DI INPUT APPENA SI CLICCA SU SEND          
        });


    


