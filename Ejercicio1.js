

function convertir(entrada) {
    // Contar el número de palabras en el texto de entrada
    const palabras = entrada.split(/(?=[A-Z])/);
    const numPalabras = palabras.length;
  
    // Convertir el string texto de entrada a snakeCase
    const snakeCase = palabras.join('_').toLowerCase();
  
    return {
      palabras: numPalabras,
      snakeCase: snakeCase
    };
  }
  
  const textoEntrada = "HolaMiNombreEsGonzalo";
  const salida = convertir(textoEntrada);
  console.log(salida);
  