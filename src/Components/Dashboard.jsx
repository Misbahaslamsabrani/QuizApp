import React, { Component } from 'react';
import Routes from './Routes/Routes';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="teal lighten-5">
                <Routes />
            </div>
        );
    }
}

export default Dashboard;