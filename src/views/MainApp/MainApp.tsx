import React from 'react';
import './MainApp.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from '../../Components/footer/footer';
import Calendar from '../Calendar/calendar';
import Home from '../Home/Home';
import VerticalNavBar from '../../Components/VerticalNavBar/VertNavBar';
import Contacts from '../Contacts/Contacts';
import Tasks from '../Tasks/Tasks';
import Settings from '../Settings/Settings';

class MainApp extends React.Component<any, any> {
    render() {
        return (
            <Router>
                <div className="main">
                    <VerticalNavBar/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/calendar" component={Calendar}/>
                        <Route path="/contacts" component={Contacts}/>
                        <Route path="/tasks" component={Tasks} />
                        <Route path="/settings" component={Settings} />
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