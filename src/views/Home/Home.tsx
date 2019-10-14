import React from 'react';

import RightSide from './SplitScreen/RightSide';
import LeftSide from './SplitScreen/LeftSide';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="split-left">
                    <LeftSide />
                </div>
                <div className="split-right">
                    <RightSide />
                </div>
            </div>
        );
    }
}

export default Home;