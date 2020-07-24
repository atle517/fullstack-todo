import React, { Component } from 'react'
import './AddToDo_Button.css'

class AddToDo_Button extends Component {

    render() {

        // Destructure prop
        const { type, symbol, symbolColor } = this.props;

        return (
            // Show Button
            <div className={`component-addtodo-button-${type}`} onClick={this.props.clickHandler}>
                <div className={`fa fa-${symbol}`} style={{ color: `${symbolColor}` }} />
            </div>
        )
    }
}

export default AddToDo_Button
