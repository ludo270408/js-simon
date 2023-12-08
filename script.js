//Genero fino a 5 numeri casuali e li inserisco nell'array
 const array_of_numbers = [];
 while(array_of_numbers.length<5){
    let number=Math.floor(Math.random() * 100+1);
    if(!array_of_numbers.includes(number)){
        array_of_numbers.push(number);
    }
 }
//Mostro i numeri nell'html
document.getElementById('numbers').innerText=array_of_numbers;
//Metto il timer
setTimeout(resetDom, 5000);
//Inserire i 5 numeri nell'array utente usando il promt dopo i 30 secondi
setTimeout(function(){
    const users_numbers=[];
    while(users_numbers.length<5){
        let number= parseInt(prompt('Inserisci il numero'));
        if(!isNaN(number)){
            users_numbers.push(number);
        }
    }
}, 6000);
//Verificare se i numeri sono uguali e quali e quanti numeri ha indovinato l'utente
function CheckNumber()
