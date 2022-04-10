import React from 'react';

class LastJob extends React.Component {
  render() {
    const{alertJob, changeHandler}= this.props
    return(
      <fieldset>
          <legend>Dados do seu último emprego</legend>
          <form>
            <label htmlFor='curriculum'>
              Resumo do seu currículo:
              <textarea name='curriculum' maxLength='1000' onChange={changeHandler} required>Escreva aqui</textarea>
            </label>
            <label htmlFor='job'>
              Cargo:
              <input type='text' name='job' maxLength='40' required onChange={changeHandler} onMouseEnter={alertJob}></input>
            </label>
            <label type='jobDescription'>
              Descrição do cargo:
              <input type='text' name='jobDescription' maxLength='500' onChange={changeHandler} required></input>
            </label>
          </form>
        </fieldset>
    )
  }
}
export default LastJob;