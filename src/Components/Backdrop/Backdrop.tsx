import React from 'react';
import './Backdrop.css';

class Backdrop extends React.Component<any,any> {
    render () {
        return (
            <div className="backdrop" onClick={this.props.backdropClick}/>
        )
    }
};

export default Backdrop;