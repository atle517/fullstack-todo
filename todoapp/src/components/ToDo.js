import React, { Component } from 'react'

export class ToDo extends Component {

    render() {

        const { id, desc, completed } = this.props;

        let descClassName = completed ? "component-todo-desc lined-through" : "component-todo-desc";

        return (
            <div className="component-todo-wrapper">
                <div className="component-todo" onClick={() => this.props.setAsCompleted(id)}>
                    <div className="component-todo-checkmark-box" />
                    {completed ? <div className="component-todo-checkmark-check">&#10003;</div> : ""}
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


