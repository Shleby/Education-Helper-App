import React from 'react';
import './VerticalNavBar.css';
import { Link } from 'react-router-dom';
import logo from '../Icons/EHAlogo.png';
import dbLogo from '../Icons/dbLogo.png';
import cdLogo from '../Icons/cdLogo.png';
import ccLogo from '../Icons/contactsLogo.png';
import tkLogo from '../Icons/tasksLogo.png';
import stLogo from '../Icons/settings.png';

class VerticalNavBar extends React.Component<any, any> {
    state = {
        name: "Shelby Huffman"
    }

    render() {
        return (
            <div className="vertical-nav bg-white" id="sidebar">
                <div className="py-4 px-3 mb-4 bg-light">
                    <div className="media d-flex align-items-center">
                        <div className="media-body">
                            <Link to='/'>
                                <img className="logo" src={logo} alt="logo" />
                            </Link>
                            <ul className="nav flex-column bg-white mb-0">
                                <div className="box overlay gold">
                                    <Link to='/dashboard'>
                                        <img className="db-logo" src={dbLogo} alt="logo" />
                                    </Link>
                                </div>
                                <div className="box overlay gold">
                                    <Link to='/calendar'>
                                        <img className="cd-logo" src={cdLogo} alt="logo" />
                                    </Link>
                                </div>
                                <div className="box overlay gold">
                                    <Link to='/contacts'>
                                        <img className="cc-logo" src={ccLogo} alt="logo" />
                                    </Link>
                                </div>
                                <div className="box overlay gold">
                                    <Link to='/tasks'>
                                        <img className="tk-logo" src={tkLogo} alt="logo" />
                                    </Link>
                                </div>
                                <div className="box overlay gold">
                                    <Link to='/settings'>
                                        <img className="st-logo" src={stLogo} alt="logo" />
                                    </Link>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VerticalNavBar;