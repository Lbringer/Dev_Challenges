import React from 'react';
import './input.css'

class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let divCss = "";
        let inputCss = "";
        if (!this.props.hover) {
            if (this.props.error) {
                if (this.props.focus) {
                    divCss = "errfocusCon";
                    inputCss = "errfocus";
                }
                else {
                    divCss = "errCon";
                    inputCss = "error";
                }
            }
            else {
                if (this.props.focus) {
                    divCss = "deffocusCon";
                    inputCss = "deffocus";
                }
                else {
                    divCss = "defaultCon";
                    inputCss = "default";
                }
            }
        }
        else {
            inputCss = "hover";
        }
        return (<>
            <div className='inputCon'>
                <div className='label'>{this.props.label}</div>
                <div className={divCss}>
                    <div><label for="input">Label</label></div>
                    <input className={inputCss} id="input" placeholder='Placeholder'></input>
                </div>
            </div>
        </>)
    }
}
export default Input;