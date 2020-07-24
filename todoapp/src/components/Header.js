import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="fixed-header">
                <div style={{display: 'inline-block', marginLeft: 'auto', marginRight:'auto'}}>ToDo Application</div>

                {/* <div style={linkStyle} >ToDo's | About</div> */}
            </div>
        )
    }
}

// const linkStyle = {
//     display: 'inline-block',

//     marginRight: '5px',
//     marginLeft: 'auto',

//     textAlign: 'right'
// }

export default Header
