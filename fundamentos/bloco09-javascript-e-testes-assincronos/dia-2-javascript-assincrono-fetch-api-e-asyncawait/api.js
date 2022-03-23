// api.js
const fetchCoins = async () => {//assyn tem que ser colocado antes para tornar a função assincrona
  const url = 'https://api.coincap.io/v2/assets';//crio uma cosntante para receber o API em questao

  const coins = await fetch(url)//tem que colcocar o await antes da função para esperar o resultado
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}
console.log(fetchCoins());

const setCoins = async () => {
  const coins = await fetchCoins();

  const coinsList = document.getElementById('id-coins');
  //nao coloca then na função porque, teoricamente, na função acima ja especifiquei o que
  // quero realizar e a definicao do erro caso ocorra

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);

      newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

      coinsList.appendChild(newLi);
    });
}

window.onload = () => setCoins();
