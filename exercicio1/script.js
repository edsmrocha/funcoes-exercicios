function imprimaNome (nome) {
    console.log(`Ola, ${nome}!`)
}

imprimaNome("Edson")

//TABUADA 

function imprimirTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      console.log(numero + " x " + i + " = " + numero * i);
    }
  }
imprimirTabuada(10)  
imprimirTabuada(5)