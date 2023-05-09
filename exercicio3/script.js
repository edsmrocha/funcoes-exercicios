// A

function somar(a, b) {
    return a + b;
  }
  
  function subtrair(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    return a / b;
  }
  console.log(somar(2, 3)); 
  console.log(subtrair(5, 2)); 
  console.log(multiplicar(4, 7)); 
  console.log(dividir(10, 2)); 

const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));

const resultado1 = (numero1+numero2)
const resultado2 = (numero1*numero2)
const resultado3 = (numero1/numero2)
const resultado4 = (numero1-numero2)

console.log("Resultado da Soma:", resultado1);
console.log("Resultado da Multiplicação:", resultado2);    
console.log("Resultado da divisão:", resultado3);
console.log("Resultado da Subtração:", resultado4);