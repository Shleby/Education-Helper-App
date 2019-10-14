import React from 'react';
import './MainApp.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import MainNav from '../../Components/MainNav';
import Footer from '../../Components/footer/footer';
import CreateRelease from '../CreateRelease/CreateRelease';
import Home from '../Home/Home';
import Login from '../Login/Login';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';
import Backdrop from '../../Components/Backdrop/Backdrop';

class MainApp extends React.Component<any, any> {
    state = {
        sideDrawerOpen: false,
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState: { sideDrawerOpen: any; }) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop backdropClick={this.backdropClickHandler} />;
        }

        return (
            <Router>
                <div className="main">
                    <MainNav drawerClickHandler={this.drawerToggleClickHandler} />
                    <SideDrawer show={this.state.sideDrawerOpen} />
                    {backdrop}
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/create" component={CreateRelease}/>
                    </Switch>
                </div>
                <div className="footer-main">
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default MainApp;