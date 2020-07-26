import React from 'react';
import './AddToDo_Menu.css';
import AddToDo_Button from './AddToDo_Button';

function AddToDo_Menu(props) {
    return (
        <div className="component-addtodo-window">

            {/* Input - ToDo Description */}
            <input className="component-addtodo-input" onChange={e => props.setDesc(e.target.value)} />

            {/* Buttons - 'Close menu' and 'Add new ToDo' */}
            <div style={{display: 'flex'}}>
                {/* Button - Close menu */}
                <AddToDo_Button type="close" symbol="close" symbolColor="rgb(50, 0, 0)" clickHandler={props.clickHandler} />

                {/* Button - Add new ToDo */}
                <AddToDo_Button type="apply" symbol="check" symbolColor="rgb(0, 50, 0)" clickHandler={props.addToDo} />
            </div>
        </div>
    )
}

export default AddToDo_Menu
