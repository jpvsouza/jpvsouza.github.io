// Desafio 10
function techList(array, name) {
  let lista = array.sort();

  for (let index = 0; index < lista.length; index += 1) {
    
    let objeto = {
      tech: array[index],
      name: name
    };

    lista[index] = objeto;
  }

  console.log(lista);

  if (array.length == 0) {
    return "Vazio!";
  }
  else {
    return lista;
  }
}


// Desafio 11
function generatePhoneNumber(array) {
  if (array.length != 11) {
    return "Array com tamanho incorreto."
  }
  else {
    let numeroBruto = array;

    for (let index = 0; index < array.length; index += 1) {
      let counter = 0;
      for (num of array) {
        if (num == index) {
          counter += 1;
        }
      }

      if (counter > 2) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }


    let numero = "";

    for (let index =0; index < 15; index += 1) {
     

      if (index == 0) {
        numero += "(";
      }
      else if (index == 3) {
        numero += ")";
      }
      else if (index == 4) {
        numero += " ";
      }
      else if (index == 10) {
        numero += "-";
      }
      else {
        if (numeroBruto[0] > 9 || numeroBruto[0] < 0) {
          return "não é possível gerar um número de telefone com esses valores";
        }
        else {
          let primeiro = numeroBruto.shift();
          numero += primeiro;
        
      } 
    }
  }

  return numero;
}
}

console.log(generatePhoneNumber([3, 1, 8, 9, 6, 7, 4, 0, 8, 3 ,9]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  } else if (lineA < Math.abs(lineB - lineC)  && lineB < Math.abs(lineA - lineC) && lineC < Math.abs(lineA - lineB)) {
    return false;
  } else {
    return false;
  }
}

// Desafio 13
//O que aparecer entre colchetes vai ser procurado pelo regex
//[0] procura o caracter zero no texto
//[0c] procura o caracter zero OU o caracter c
//[0-9] procura qualquer caracter entre zero e nove no texto
//[0][0] procura um zero do lado do outro no texto, uma sequencia de dois zeros
//[0]{3} procura por uma sequencia de três zeros
//[0-9]{6} procura os seis primeiros digitos de todas linhas
//$ representa o fim da linha
//[0-9]{6}$ procura os últimos seis elementos de todas linhas
//^ representa o comeco da linha
//^[0-9]{3}$ só seleciona linhas com exatamente três caracteres pois tem o simbolo de começo E fim de linha
//+ representa um numero qualquer de ocorrencias
//[0-9]+ significa que podem ser uma ocorrencia qualquer de varios numeros de 0 a 9

function hydrate(bebidas) {
  let regex = /[1-9]/g ///\d+/g;
  let numeros = bebidas.match(regex);
  let soma = 0;

  for (num of numeros) {
    soma += parseInt(num, 10);
  }

  if (soma > 1) {
    return soma + " copos de água";
  }
  else {
    return soma + " copo de água";
  }
  
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

// let cursoWeb = {
//   nomeD: "Joao",
//   curso: "HTML",
//   bornInfo: {
//     cidade: "Belo Horizonte",
//     estado: "MG"
//   }
// };

// cursoWeb.fullName = cursoWeb.nomeD + " o " + cursoWeb.curso;

// console.log(cursoWeb.nomeD, cursoWeb.curso);
// console.log(cursoWeb["nomeD"], cursoWeb["curso"]);
// console.log(cursoWeb.fullName);
// console.log(cursoWeb.bornInfo.estado);

