import React from 'react';
import './SideDrawer.css';

import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

class SideDrawer extends React.Component<any, any> {
    render() {
        let drawerClass = 'side-drawer';
        if (this.props.show) {
            drawerClass = 'side-drawer open';
        }
        return (
            <nav className={drawerClass}>
                <ul>
                    <Link className="side-drawer-li" to='/'>
                        <Button
                            variant="contained"
                            startIcon={<HomeIcon />}
                        >
                            Home
                        </Button>
                    </Link>
                    <Link className="side-drawer-li" to='/create'>
                        <Button
                            variant="contained"
                            startIcon={<NoteAddIcon />}
                        >
                            Create Message
                        </Button>
                    </Link>
                    <div className="side-drawer-log" >
                        <Link to='login'>
                            <Button
                                variant="contained"
                                startIcon={<MeetingRoomIcon />}
                            >
                                Logout
                        </Button>
                        </Link>
                    </div>
                </ul>
            </nav>
        )
    }
};

export default SideDrawer;