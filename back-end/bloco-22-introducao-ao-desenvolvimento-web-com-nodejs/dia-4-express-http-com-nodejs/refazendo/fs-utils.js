const fs= require('fs').promises;

const getSimpsons = async () => {
    const response= await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons= JSON.parse(response)
    return simpsons;
};

const setSimpsons = async (newSimpsons) => {
    const response= await  fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
    return response;
}

module.exports ={ getSimpsons, setSimpsons };
