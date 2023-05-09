
function somar(a, b) {
    console.log(a + b);
  }
somar(2,3)  


function verificarMaiorOuIgual(a, b) {
    console.log(a >= b);
  }
verificarMaiorOuIgual(5,3)

function verificarPar(numero) {
    if (numero % 2 === 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
verificarPar(5)  

function calcularSalarioLiquido(salarioBruto) {
    const descontoInss = salarioBruto * 0.1;
    const salarioLiquido = salarioBruto - descontoInss;
    return salarioLiquido;
  }
  const salarioLiquido = calcularSalarioLiquido(3800);
  console.log(salarioLiquido);
    