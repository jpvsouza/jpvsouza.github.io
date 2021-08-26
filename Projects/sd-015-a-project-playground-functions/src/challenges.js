// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  else {
    return false;
  }
}

console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  let area = 0;
   area = base * height / 2;
  
  return area;
}

console.log(calcArea(5, 4));

// Desafio 3
function splitSentence(frase) {
  let array = [];
  array = frase.split(" ")
  return array;
}

console.log(splitSentence("Eu comi um ovo hoje cedo"));
console.log(splitSentence('Eu comi um ovo hoje cedo').length);

// Desafio 4
function concatName(frase) {
  let resposta = "";
  let array = [];
  array = frase;
  
  resposta += array[array.length - 1] + ", ";
  resposta += array[0];

  return resposta;
}

console.log(concatName('Eu comi um ovo hoje cedo'));

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = wins * 3 + ties * 1;
  return pontuacao;
}

console.log(footballPoints(3, 3));

// Desafio 6
function highestCount(numeros) {
  let array = [];
  array = numeros;
  let maior = numeros[0];
  let contador = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (maior < array[index])
    {
      maior = array[index];
    }
  }

  for (let indice = 0; indice < array.length; indice += 1) {
    if (maior == array[indice]) {
      contador += 1;
    }
  }

  return contador;
}

console.log(highestCount([1, 2, 3, 2, 3, 4, 2, 1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let rato = 0;
  let gato1 = 0;
  let gato2 = 0;

  rato = Math.abs(mouse);
  gato1 = Math.abs(cat1);
  gato2 = Math.abs(cat2);

  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);

  if (distancia1 < distancia2) {
    return "cat1"
  }
  else if (distancia2 < distancia1) {
    return "cat2"
  }
  else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let array = [];
  array = numeros;
  let arrayEstranho = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 == 0 && array[index] % 5 == 0) {
      arrayEstranho[index] = 'fizzBuzz';
    }
    else if (array[index] % 3 == 0) {
      arrayEstranho[index] = "fizz";
    }
    else if (array[index] % 5 == 0) {
      arrayEstranho[index] = "buzz";
    }
    else {
      arrayEstranho[index] = "bug!";
    }
  }

  return arrayEstranho;
}

// Desafio 9
function encode(normal) {
  let array = normal.split("");

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] == "a") {
      array[index] = 1;
    }
    else if (array[index] == "e") {
      array[index] = 2;
    }
    else if (array[index] == "i") {
      array[index] = 3;
    }
    else if (array[index] == "o") {
      array[index] = 4;
    }
    else if (array[index] == "u") {
      array[index] = 5;
    }
  }
  
  return array.join("");
}

console.log(encode("o raio que o parta"));


function decode(codificado) {
  let array = codificado.split('');

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] == 1) {
      array[index] = "a";
    } 
    else if (array[index] == 2) {
      array[index] = "e";
    } 
    else if (array[index] == 3) {
      array[index] = "i";
    } 
    else if (array[index] == 4) {
      array[index] = "o";
    } 
    else if (array[index] == 5) {
      array[index] = "u";
    }
  }
  return array.join("");
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
