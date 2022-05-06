const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);
const upCaser = (string) => string.toUpperCase();
const firstLetter = (string) => string.charAt(0);
const concat = (string1, string2) => string1.concat(string2);
function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}
module.exports = { retornaNumeroAleatorio, upCaser, firstLetter, concat, fetchDog };