import React, { Component } from 'react'

function AddToDoButton(props) {
    return (
        <div>
            {/* Show menu Button */}
            <div className="component-addtodo-button-open" onClick={props.clickHandler}>
                <div className="fa fa-plus" style={plusStyle} />
            </div>
        </div>
    )
}

const plusStyle = {
    textAlign: 'center',

    margin: 'auto',

    fontSize: '45px',
    color: 'rgb(0, 100, 0)',

}

export default AddToDoButton
