import React, { Component } from 'react'
import './ToDo.css';

export class ToDo extends Component {

    render() {

        // Destructure props
        const { id, desc, completed } = this.props;

        // Decides if the text should be shown with a lined-through effect
        let descClassName = completed ? "component-todo-desc lined-through" : "component-todo-desc";

        return (
            <div className="component-todo-wrapper">

                {/* Main component ToDo div */}
                <div className="component-todo" onClick={() => this.props.setAsCompleted(id)}>
                    {/* Checkmark */}
                    <div className="component-todo-checkmark-box" />
                    {completed ? <div className="component-todo-checkmark-check">&#10003;</div> : ""}

                    {/* Show desc text */}
                    <div className={descClassName}>{desc}</div>
                </div>

                {/* Delete button */}
                <div className="component-todo-delete-button" onClick={() => this.props.remove(id)}>
                    <div className="fa fa-close" style={{ margin: 'auto' }} />
                </div>
            </div>
        )
    }
}


export default ToDo


