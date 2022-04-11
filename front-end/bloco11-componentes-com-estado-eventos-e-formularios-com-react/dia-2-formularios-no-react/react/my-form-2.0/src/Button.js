import React from 'react';

class Button extends React.Component {
  render() {
    const { arrayStates } = this.props;
    return (
      <div>
        {arrayStates.map((array, index) => <p key={index}> {array}</p>)}
      </div>
    )
  }
}

export default Button;