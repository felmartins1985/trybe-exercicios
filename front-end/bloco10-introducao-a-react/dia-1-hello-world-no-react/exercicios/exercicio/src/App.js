import React from 'react';
import logo from './logo.svg';
import './App.css';
// a função abaixo retorna o valor que eu coloco parametro dentro de uma li
const Task = (value) => {
  return (
    <li>{value}</li> // a key serve para identificar itens dentro de uma lista. No caso, eu coloco com o mesmo do valor que vou colocar para ser mais facil a localização
  );
}
const tarefas = ["acordar", "tomar banho", "malhar", "estudar", "comer", "dormir"];
class App extends React.Component {
  render() {
    return (
      <ol>{tarefas.map((tarefa) => Task(tarefa))}</ol>
    )
  }
}

export default App;
