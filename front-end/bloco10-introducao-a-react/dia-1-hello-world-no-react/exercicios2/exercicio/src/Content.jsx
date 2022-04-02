import React from "react";
const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composicao de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composicao de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];
class Content extends React.Component {
  render() {
    return (
      <div className="content">
        {conteudos.map((obj) => (//eu tenho que colocar duas divs por dois motivos: primeiro que quando se coloca mais de uma tag, é necessario colocar uma div ou <>. O segundo motivo é que no JSX as expressoes precisam ter um elemento pai. Por isso, crio outra div.
        // de acordo com o que está sendo feito, cada elemento do map vai ter uma key diferente
          <div> 
            <p>{`O conteudo é: ${obj.conteudo}`}</p>
            <p>{`Status: ${obj.status}`}</p>
            <p>{`Bloco: ${obj.bloco}`}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Content;
