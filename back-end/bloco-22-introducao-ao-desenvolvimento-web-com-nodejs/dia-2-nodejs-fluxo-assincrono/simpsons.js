const fs = require('fs').promises;

// fs.readFile('simpsons.json', 'utf8')
// .then((data)=>{
//   const simpsons = JSON.parse(data);
//   const character= simpsons.map((simp)=>`${simp.id}-${simp.name}`);
//   // console.log(`o conteudo esperado é: ${character}`);
//   character.forEach((string) => console.log(string));
// }
// )

const getSimpsonsById = async (id) => {
  const data=await fs.readFile('simpsons.json', 'utf8');
  const simpsons = JSON.parse(data);
  const searchSimpson= simpsons.find((simps)=>Number(simps.id)===id);
  // console.log(searchSimpson);
  if(!searchSimpson){
    throw new Error('Id não encontrado');
  }
  return searchSimpson;
}

//
const removeSimpson = async () => {
  const data=await fs.readFile('simpsons.json', 'utf8');
  const simpsons = JSON.parse(data);
  const newSimpsonsArray= simpsons.filter((simps)=>Number(simps.id)!==6 && Number(simps.id)!==10);
  fs.writeFile('simpsons.json',JSON.stringify(newSimpsonsArray))
}
//
const familySimpson= async () => {
  const data=await fs.readFile('simpsons.json', 'utf8');
  const simpsons = JSON.parse(data);
  const family= simpsons.filter((simps)=>Number(simps.id)<=4);
  fs.writeFile('./simpsonFamily.json',JSON.stringify(family),{flag: 'w'})
}
//
const addNelson = async () => {
  const data=await fs.readFile('simpsonFamily.json', 'utf8');
  const simpsons = JSON.parse(data);
  simpsons.push({id:5,name:'Nelson'});
  fs.writeFile('simpsonFamily.json',JSON.stringify(simpsons),{flag: 'w'})
}
//
const replaceNelson= async()=>{
  const data= await fs.readFile('simpsonFamily.json', 'utf8');
  const simpsons = JSON.parse(data);
  console.log(simpsons);
  const findNelson=simpsons.filter((simps)=>simps.name!=='Nelson');
  // console.log(findNelson);
  // findNelson.name.replace=('Nelson','Maggie');
  console.log(findNelson);
  const inputNewSimpson=findNelson.concat({id:5,name:'Maggie'});
  console.log(inputNewSimpson);
  fs.writeFile('simpsonFamily.json',JSON.stringify(inputNewSimpson),{flag: 'w'})
}
//
const main = async () => {
  // const simpson= await getSimpsonsById(1);
  // console.log(simpson);
  // await removeSimpson();
  // await familySimpson();
  // await addNelson();
  await replaceNelson();
}
main();
