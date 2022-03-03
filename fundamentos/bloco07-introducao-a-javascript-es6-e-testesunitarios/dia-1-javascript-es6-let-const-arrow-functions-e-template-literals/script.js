const testingScope=(escopo) => {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    
  }

  testingScope(true);

    const oddsAndEvens = [13, 3, 4, 10, 7, 2];

 oddsAndEvens.sort(function(a, b) {
   return a - b;
 });
 console.log(oddsAndEvens);
 
  const sortOddsAndEvens=()=>{
    oddsAndEvens[0]=2;
    oddsAndEvens[1]=3;
    oddsAndEvens[2]=4;
    oddsAndEvens[3]=7;
    oddsAndEvens[4]=10;
    oddsAndEvens[5]=13;
    return oddsAndEvens;
    };
  const sortedArrays=sortOddsAndEvens();

  console.log(`os números ${sortedArrays} estão em ordem crescente!`);

//parte 2
//exercicio 1
const factorial=(number)=>{
    let result=1;
    for (let i=2; i<=number; i++){
        result=result*i;
    }
    return result;
}
console.log(factorial(5));

// //exercicio 2
// lembrar que o slipt vai transformar a string em arrays, contendo cada posição uma palavra
const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';
    console.log(wordArray);

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));