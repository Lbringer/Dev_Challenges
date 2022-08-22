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
        <Input label={"&:hover"} hover />
        <Input label={"&:focus"} focus />
      </div>
      <div className='con'>
        <Input label={"<Input error/>"} error />
        <Input label={"&:hover"} hover error />
        <Input label={"&:focus"} focus error />
      </div>
      <div className='con'>
        <Input label={"<Input disabled>"} disabled />
      </div>
      <div className='con'>
        <Input label={"<Input helperText=”Some interesting text” />"} helperText="Some interesting text" />
        <Input label={"<Input helperText=”Some interesting text” />"} error helperText="Some interesting text" />
      </div>
      <div className='con'>
        <Input label={"<Input startIcon/>"} startIcon />
        <Input label={"<Input endIcon/>"} endIcon />
      </div>

      <div id="copy-right">created by <span>Lbringer/Aditya</span>-devChallenges.io</div></>)
  }
}

export default App;
