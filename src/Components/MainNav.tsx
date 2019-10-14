import React from 'react';
import './MainNav.css';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import logo from './Icons/messaging-portal-logo.png'

import DrawerToggleButton from '../Components/SideDrawer/DrawerToggleButton';
import { Paper, IconButton, InputBase, Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

class MainNav extends React.Component<any, any> {

    render() {
        return (
            <header className="nav-header">
                <nav className="nav">
                    <div>
                        <DrawerToggleButton click={this.props.drawerClickHandler} />
                    </div> 
                    <Paper className="search-bar">
                        <IconButton />
                        <InputBase
                            placeholder="Search messages"
                            inputProps={{ 'aria-label': 'search messages' }}
                        />
                        <IconButton aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <Divider orientation="vertical" />
                    </Paper>
                    <div className="nav-logo">
                        <Link to='/'>
                            <img className="logo" src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="spacer" />
                    <div className="nav-links-div">
                        <ul>
                            <Link className="link-style" to='/'>
                                <Button
                                    variant="contained"
                                    startIcon={<HomeIcon />}
                                >
                                    Home
                                </Button>
                            </Link>
                            <Link className="link-style" to='/create'>
                                <Button
                                    variant="contained"
                                    startIcon={<NoteAddIcon />}
                                >
                                    Create Message
                                </Button>
                            </Link>
                            <Link className="link-style" to='login'>
                                <Button
                                    variant="contained"
                                    startIcon={<MeetingRoomIcon />}
                                >
                                    Logout
                                </Button>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default MainNav;