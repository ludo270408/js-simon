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
    let numbers_guessed=CheckNumber(users_numbers, array_of_numbers)
}, 6000);
//Verificare se i numeri sono uguali e quali e quanti numeri ha indovinato l'utente
function CheckNumber(users_numbers, random_numbers){
    let numbers_guessed=[];
    for(let i=0; i<users_numbers.length; i++){
        if(random_numbers[i]== users_numbers[i])){
            numbers_guessed.push(users_numbers[i]);
        }
    }
    return numbers_guessed;
}
