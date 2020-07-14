import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

class Routes extends Component {
    render() {
        console.disableYellowBox = true;
        return (
            <Router>
                <Scene key="root" hideNavBar={true}>
                    <Scene key="home" component={Home} initial={true} />
                    <Scene key="detail" component={Detail} />
                </Scene>
            </Router>
        )
    }
}

export default Routes;
