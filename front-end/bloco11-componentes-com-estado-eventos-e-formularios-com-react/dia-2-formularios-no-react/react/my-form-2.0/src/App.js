import React from 'react'
import './App.css';
import PersonalData from './PersonalData'
import LastJob from './LastJob'
import Button from './Button'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: 0,
      adress: '',
      city: '',
      brazilState: '',
      house: '',
      curriculum: '',
      job: '',
      alertJob: 'yes',
      jobDescription: '',
      showing: false,
    }
  }
  changeHandler = (event) => {
    let { name, value } = event.target;

    if (name === 'name') value = value.toUpperCase();
    this.updateState(name, value);
  }

  removeSpecial = (e) => {
    const { value } = e.target
    this.setState({ adress: value.replace(/[^a-zA-Zs]/g, "") })
  }
  onBlurCheck = (e) => {
    let { name } = e.target;
    if (name === 'city') {
      e.target.value = e.target.value.match(/^\d/) ? '' : e.target.value;
    }
  }
  updateState = (name, value) => {
    this.setState({ [name]: value })
  }

  alertJob = () => {
    if (this.state.alertJob === 'yes') {
      alert('Preencha com cuidado esta informação.');
      this.setState({ alertJob: 'no' })
    }
  }
  submitButton = () => {

  }
  render() {

    return (
      <div>
        <PersonalData changeHandler={this.changeHandler} stateName={this.state.name}
          removeSpecial={this.removeSpecial} stateAdress={this.state.adress}
          onMouseEnter={this.onBlurCheck} cityState={this.state.city}
          updateState={this.updateState} brazilState={this.state.brazilState}
        />
        <LastJob alertJob={this.alertJob} changeHandler={this.changeHandler} />
        <button onClick={() => this.setState({ showing: true })}> Enviar Formulário</button>
        <div style={{ display: (this.state.showing ? 'block' : 'none') }}>
          <Button arrayStates={[this.state.name, this.state.email, this.state.cpf, this.state.adress,this.state.city, this.state.brazilState, this.state.house, this.state.curriculum, this.state.job,this.state.jobDescription]} 
          />
        </div>
      </div>
    )
  }
}

export default App;
