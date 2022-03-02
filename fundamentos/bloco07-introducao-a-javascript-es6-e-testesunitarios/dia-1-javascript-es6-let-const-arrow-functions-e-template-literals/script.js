// const testingScope=(escopo) => {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
    
//   }

//   testingScope(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens=()=>{
    oddsAndEvens[0]=2;
    oddsAndEvens[1]=3;
    oddsAndEvens[2]=4;
    oddsAndEvens[3]=7;
    oddsAndEvens[4]=10;
    oddsAndEvens[5]=13;
    return oddsAndEvens;
}
  const sortedArrays=sortOddsAndEvens();

  console.log(`os números ${sortedArrays} estão em ordem crescente!`);
