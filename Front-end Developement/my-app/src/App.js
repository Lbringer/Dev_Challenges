import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      <h1>Buttons</h1>
      <div className='con2'>
        <Button />
        <Button variant="hover" />
        <Button />
      </div>
    </div>)
  }
}
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "Default",
      css: {},
      val: "Default"
    }
  }
  render() {
    switch (this.props.variant) {
      case "hover": {
        this.setState({
          label: "&:hover ,&:focus", css: {
            ":hover": {

            }
          }
        })
      }
    }
    return (
      <div className='con' >
        <label>{this.state.label}</label>
        <button style={this.state.css}>{this.state.val}</button>
      </div>
    )
  }
}

export default App;
