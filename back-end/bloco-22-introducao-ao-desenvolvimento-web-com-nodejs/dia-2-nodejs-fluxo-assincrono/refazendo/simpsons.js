const fs = require('fs').promises;

const readSimpsons = async () => {
  const readSimpsonsJson= await fs.readFile('./simpsons.json', 'utf8');
  const readSimpsons= JSON.parse(readSimpsonsJson);
  console.log(readSimpsons);
  const simpsonsMap= readSimpsons.map((sp)=>{
    console.log(`${sp.id}-${sp.name}`);
  })
  return simpsonsMap;
}
//
const findSimpsonById = async (id) =>  {
  const readSimpsonsJson= await fs.readFile('./simpsons.json', 'utf8');
  const readSimpsons= JSON.parse(readSimpsonsJson);
  const findSimpson= readSimpsons.find((sp)=>Number(sp.id)===id)
  if(!findSimpson) throw new Error('id não encontrado');
  return findSimpson;
}

const changeSimpsonById = async () =>  {
  const readSimpsonsJson= await fs.readFile('./simpsons.json', 'utf8');
  const readSimpsons= JSON.parse(readSimpsonsJson);
  const changeSimpsons= readSimpsons.filter((sp)=>Number(sp.id)!==10 && Number(sp.id)!==6)
  await fs.writeFile('./simpsons.json', JSON.stringify(changeSimpsons));
}

//
const createSimpsonsFamily= async () => {
  const readSimpsonsJson= await fs.readFile('./simpsons.json', 'utf8');
  const readSimpsons= JSON.parse(readSimpsonsJson);
  const newSimpsonsFamily= readSimpsons.filter((sp)=> Number(sp.id)<=4)
  const addNelson=newSimpsonsFamily.push({id: "5", name: "Nelson"});
  // console.log(addNelson);
  const removeNelson= newSimpsonsFamily.filter((sp)=>sp.name!=="Nelson");
  // console.log(removeNelson);
  const addMaggie=removeNelson.push({id: "5", name: "Maggie"});
  console.log(removeNelson);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(removeNelson));
}
//
const main = async () => {
  try{
    // const read= await readSimpsons();
    // const find= await findSimpsonById(12);
    // const change= await changeSimpsonById();
    const newFamily= await createSimpsonsFamily();
    // console.log(change);
  } catch(error){
    console.log(error.message);
  }
}
main();