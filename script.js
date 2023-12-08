//Genero fino a 5 numeri casuali e li inserisco nell'array
 const array_of_numbers = [];
 while(array_of_numbers.length<5){
    let number=Math.floor(Math.random() * 100+1);
    if(!array_of_numbers.includes(number)){
        array_of_numbers.push(number);
    }
 }
//Mostro i numeri nell'html
//Metto il timer
//Inserire i 5 numeri usando il promt
//Verificare se i numeri sono uguali
//Dire quanti e quali numeri ha indovinato l'utente
