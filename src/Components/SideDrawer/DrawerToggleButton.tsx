import React from 'react';
import './DrawerToggleButton.css'

class DrawerToggleButton extends React.Component<any,any> {
    render() {
        return (
            <button className="toggle-button" onClick={this.props.click}>
                <div className="toggle-button-line" />
                <div className="toggle-button-line" />
                <div className="toggle-button-line" />
            </button>
        )
    }
}

export default DrawerToggleButton;