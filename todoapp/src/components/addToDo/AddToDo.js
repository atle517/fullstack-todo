import React, { Component } from 'react'
import AddToDoButton from './AddToDoButton';
import AddToDoWindow from './AddToDoWindow';

export class AddToDo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showWindow: true,
            todoDesc: ""
        }
    }

    setWindow = () => {
        this.setState({
            showWindow: !this.state.showWindow
        });
    }

    setTodoDesc = desc => {
        this.setState({
            todoDesc: desc
        });

        console.log(desc);
    }

    render() {

        return (
            <div className="component-addtodo">
                {this.state.showWindow ? <AddToDoWindow clickHandler={this.setWindow} setDesc={this.setTodoDesc}/> 
                : 
                <AddToDoButton clickHandler={this.setWindow} />}

                
            </div>
        )


    }
}

export default AddToDo
