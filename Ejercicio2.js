
function combinaciones(arr) {
    const resultado = [[]]; // Inicializamos con un arreglo vacío
  
    for (let i = 0; i < arr.length; i++) {
      const currentNumber = arr[i];
      const currentLength = resultado.length;
  
      for (let j = 0; j < currentLength; j++) {
        const currentCombination = resultado[j];
        resultado.push([...currentCombination, currentNumber]);
      }
    }
  
    return resultado;
  }
  
  const arrayEntrada = ['a', 'b', 'c'];
  const arraySalida = combinaciones(arrayEntrada);
  console.log(arraySalida);
  