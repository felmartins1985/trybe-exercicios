const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// // Adicione seu código aqui
// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails
emailListInData.forEach(showEmailList);
//o for each utiliza a função showemaillist e esta função percorre cada elemento do array para assim pegar cada 
// item do array e fazer console.log
