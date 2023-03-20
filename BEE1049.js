var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let estrutura = lines[0].replace("\r", "");
let classe = lines[1].replace("\r", "");
let alimentacao = lines[2].replace("\r", "");

if(estrutura === "vertebrado"){
  if(classe === "ave"){
    if(alimentacao === "carnivoro"){
      return console.log("aguia")
    }else if(alimentacao === "onivoro"){
      return console.log("pomba")
  }
}
if(classe === "mamifero"){
  if(alimentacao === "onivoro"){
    return console.log("homem")
  }else if(alimentacao === "herbivoro") {
    console.log("vaca")
    }
  } 
}else if(estrutura === "invertebrado"){
  if(classe === "inseto"){
    if(alimentacao === "hematofago"){
      console.log("pulga")
    }else if(alimentacao === "herbivoro"){
      console.log("lagarta")
    }
  }
}
  if(classe === "anelideo"){
    if(alimentacao === "hematofago"){
     console.log("sanguessuga")
  }else if(alimentacao === "onivoro"){
    console.log("minhoca")
  }
}


/*Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

Entrada
A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

Saída
Imprima o nome do animal correspondente à entrada fornecida. .*/