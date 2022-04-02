import Header from './Header';
import './App.css';
import React from 'react'
import Content from './Content';
import Footer from './Footer';
class App extends React.Component {
  render(){
    return(
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}
export default App;
