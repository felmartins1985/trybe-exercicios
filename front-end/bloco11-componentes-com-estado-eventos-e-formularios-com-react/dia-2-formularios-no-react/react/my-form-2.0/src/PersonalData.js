import React from 'react';

class PersonalData extends React.Component {
  render() {
    const { changeHandler, stateName, removeSpecial, stateAdress, updateState, onMouseEnter } = this.props;
    const brazilStates = [
      "Acre",
      "Alagoas",
      "Amapá",
      "Amazonas",
      "Bahia",
      "Ceará",
      "Distrito Federal",
      "Espirito Santo",
      "Goiás",
      "Maranhão",
      "Mato Grosso do Sul",
      "Mato Grosso",
      "Minas Gerais",
      "Pará",
      "Paraíba",
      "Paraná",
      "Pernambuco",
      "Piauí",
      "Rio de Janeiro",
      "Rio Grande do Norte",
      "Rio Grande do Sul",
      "Rondônia",
      "Roraima",
      "Santa Catarina",
      "São Paulo",
      "Sergipe",
      "Tocantins",
    ];
    return (
      <div>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <form>
            <label htmlFor="name">
              Nome:
              <input type='text' id="name" name='name' value={stateName} maxLength='40' required onChange={changeHandler}>
              </input>
            </label>
            <label htmlFor="email">
              Email:
              <input type='email' id="email" name='email' maxLength='50' required onChange={changeHandler}></input>
            </label>
            <label htmlFor='cpf'>
              CPF:
              <input type='text' id='cpf' name='cpf' maxLength='11' required onChange={changeHandler}></input>
            </label>
            <label htmlFor='adress'>
              Endereço:
              <input type='text' id='adress' name='adress' value={stateAdress} maxLength='200' onChange={removeSpecial} required></input>
            </label>
            <label htmlFor='city'>
              Cidade:<input type='text' id='city' name='city' maxLength='28' required onChange={changeHandler} onBlur={onMouseEnter}></input>
            </label>
            <label htmlFor='countryState'>
              Estado:<select name="brazilState" id='countryState' onChange={changeHandler} required>
                {brazilStates.map((brazilState) => <option value={brazilState} key={brazilState}>{brazilState}</option>)}
              </select>
            </label>
            <label htmlFor='house'>
              Casa: <input type='radio' id='house' onChange={changeHandler} value='casa' name="house" required ></input>
            </label>
            <label htmlFor='apt'>
              Apartamento:<input type='radio' id='house' onChange={changeHandler} value='apt' name="house" required ></input>
            </label>
          </form>
        </fieldset>
      </div>
    )
  }
}

export default PersonalData;