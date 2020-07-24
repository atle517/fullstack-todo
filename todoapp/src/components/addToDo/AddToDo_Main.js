import React, { Component } from 'react'
import AddToDo_Button from './AddToDo_Button';
import AddToDo_Menu from './AddToDo_Menu';
import './AddToDo_Main.css';

export class AddToDo_Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showMenu: false,
            todoDesc: ""
        }
    }

    // Shows the Add ToDo
    setMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    // Sets the new ToDos desc
    setToDoDesc = desc => {
        this.setState({
            todoDesc: desc
        });
    }

    // Adds a new ToDo (as long as something is written)
    addToDo = () => {
        //Only add the new todo if there is something written
        if(this.state.todoDesc.length !== 0) this.props.addToDo(this.state.todoDesc);

        // Update state
        this.setState({
            showMenu: false,
            todoDesc: ""
        })
    }

    render() {

        return (
            // Main Div - Add To Do
            <div className="component-addtodo">

                {/* Shows "Button - Open menu" or the "Add New ToDo Menu" */}
                {this.state.showMenu ? <AddToDo_Menu clickHandler={this.setMenu} setDesc={this.setToDoDesc} addToDo={this.addToDo}/> 
                : 
                <AddToDo_Button type="open" symbol="plus" symbolColor="rgb(0, 50, 0)" clickHandler={this.setMenu} />}
                
            </div>
        )


    }
}

export default AddToDo_Main
