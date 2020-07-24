import React from 'react'

function AddToDoWindow(props) {
    return (
        <div className="component-addtodo-window">

            <input className="component-addtodo-input" onChange={e => props.setDesc(e.target.value)}/>

            {/* Close window Button */}
            <div className="component-addtodo-button-close" onClick={props.clickHandler}>
                <div className="fa fa-close" style={{ margin: 'auto' }} />
            </div>

            <div className="component-addtodo-button-apply" onClick={props.clickHandler}>
                <div className="fa fa-check" style={{ margin: 'auto' }} />
            </div>
        </div>
    )
}

export default AddToDoWindow
