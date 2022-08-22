import React from 'react';
import './input.css'

class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let divCss = "";
        let inputCss = "";
        let textcss = "";
        if (this.props.helperText) {
            if (this.props.error) {
                textcss = "errText";
            }
            else {
                textcss = "defText";
            }
        }
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
                    {this.props.startIcon ? <span class="material-symbols-outlined startIcon">
                        call
                    </span> : null}
                    {this.props.disabled
                        ? <input className={inputCss} id="input" placeholder='Placeholder' disabled >
                        </input>
                        : <input className={inputCss} id="input" placeholder='Placeholder' >
                        </input>}
                    {this.props.endIcon ? <span class="material-symbols-outlined endIcon">
                        call
                    </span> : null}
                    {this.props.helperText ? <div className={textcss}>{this.props.helperText}</div> : null}
                </div>
            </div>
        </>)
    }
}
export default Input;