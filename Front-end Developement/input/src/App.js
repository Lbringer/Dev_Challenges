import React from 'react';
import './App.css';
import Input from './input';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<>
      <h1>Inputs</h1>
      <div className='con'>
        <Input label={"<Input/>"} />
      </div>
      <div className='con'></div>
      <div className='con'></div>

      <div id="copy-right">created by <span>Lbringer/Aditya</span>-devChallenges.io</div></>)
  }
}

export default App;
