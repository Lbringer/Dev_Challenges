import React from 'react'
import './button.css'

class Button extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<>
            <div className='butCon'>
                <label>{this.props.label}</label>
                <button className={this.props.variant + " " + this.props.size + " " + this.props.color} id={this.props.disabled ? "disabled" : ""}>
                    {this.props.startIcon ? <span class="material-symbols-outlined">
                        shopping_cart_checkout
                    </span> : null}{this.props.content} {this.props.endIcon ? <span class="material-symbols-outlined">
                        shopping_cart_checkout
                    </span> : null}</button>
            </div>
        </>)
    }
}
Button.defaultProps = { content: "default" }


export default Button