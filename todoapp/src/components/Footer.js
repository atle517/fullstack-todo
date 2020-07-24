import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="fixed-footer">
                <div style={footerStyle}>
                    Created by Atle M. Lund
                </div>
            </div>
        )
    }
}

const footerStyle = {
    display: 'inline-block',

    marginRight: 'auto',
    marginLeft: 'auto',

    textAlign: 'center'
}

export default Header
