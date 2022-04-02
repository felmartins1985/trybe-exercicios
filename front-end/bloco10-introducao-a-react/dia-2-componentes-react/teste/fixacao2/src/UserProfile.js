// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.user.name} </p>
        <p> {this.props.user.email} </p>
        <Image source={this.props.user.avatar} alternativeText="User avatar" />
      </div>
      // a classe Image é utilizada aqui e parametro que vai ser utilizado no seus props source e alternativeText vai vir de outra classe que, no caso, será a App
    );
  }
}

export default UserProfile;