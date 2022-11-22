//Retornar os números de 1 a 20.
function oneThroughTwenty() {
    let numero = [];
    for (let counter = 1; counter <= 20; counter ++){
      numero.push(counter);
  }  
return numero;
}
    
console.log(oneThroughTwenty());

//Retornar os números pares de 1 a 20.
function evensToTwenty() {
  let numero = [];
  for(let counter = 1; counter <= 20; counter ++){
    if(counter % 2 === 0)
    numero.push(counter);
  }
return numero;   
}

console.log(evensToTwenty());

//Retornar os números ímpares de 1 a 20.
function oddsToTwenty() {
  let numero = [];
  for(let counter = 1; counter <= 20; counter ++){
    if(counter % 2 === 1)
    numero.push(counter);
  }
return numero; 
}

console.log(oddsToTwenty())

//Retornar os múltiplos de 5 até 100
function multiplesOfFive() {
  let numero = [];
  for(let counter = 1; counter <= 100; counter ++){
    if(counter % 5 === 0)
    numero.push(counter);
  }
return numero; 
}

console.log(multiplesOfFive());

//Retornar todos os números até 100 que forem quadrados perfeitos.
function squareNumbers() {
  let numero = [];
  for(let counter = 1; counter <= 10; counter ++){
   numero.push(counter * counter);
  }
return numero;  
}

console.log(squareNumbers());

//Retornar os números contando de trás para frente de 20 até 1.
function countingBackwards() {
    let numero = [];
    for(let counter = 20; counter >= 1; counter --){
     numero.push(counter);
    }
  return numero; 
}

console.log(countingBackwards());

//Retornar os números pares de 20 até 1.
function evenNumbersBackwards() {
  let numero = [];
    for(let counter = 20; counter >= 1; counter --)
      if(counter % 2 === 0){
     numero.push(counter);
    }
  return numero; 
}

console.log(evenNumbersBackwards());

//Retornar os números ímpares de 20 até 1.
function oddNumbersBackwards() {
  let numero = [];
  for(let counter = 20; counter >= 1; counter --)
    if(counter % 2 === 1){
   numero.push(counter);
  }
return numero; 
}

console.log(oddNumbersBackwards())

//Retornar os múltiplos de 5 contando de trás para frente a partir de 100.
function multiplesOfFiveBackwards() {
  let numero = [];
  for(let counter = 100; counter >= 5; counter --)
    if(counter % 5 === 0){
   numero.push(counter);
  }
return numero; 
}

console.log(multiplesOfFiveBackwards())

//Retornar os quadrados perfeitos contando de trás para frente a partir de 100.
function squareNumbersBackwards() {
  let numero = [];
  for(let counter = 10; counter >= 1; counter --){
   numero.push(counter * counter);
  }
return numero; 
}

console.log(squareNumbersBackwards())
