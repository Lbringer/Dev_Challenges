import React from 'react';
import './input.css'

class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<>
            <div className='inputCon'>
                <div className='label'>{this.props.label}</div>
                <div><label for="input">Label</label></div>
                {/* Based on the number of props loop over them and add them to the class */}
                <input className={this.props.variant + " " + this.props.helperText} id="input" placeholder='Placeholder'></input>
            </div>
        </>)
    }
}
export default Input;