import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import BglstForm from './Components/bgLst';
import NewBGFrom from './Components/newBG';

const RouterComponent = () => {
    return (
        <Router >
            <Stack key="root">
                <Stack key="auth" hideNavBar>
                    <Scene key="login" hideNavBar={false} component={LoginForm} title="Please Login" initial />
                </Stack>
                <Stack key="BG" hideNavBar>
                    <Scene key="bglst" hideNavBar={false} component={BglstForm} title="BG Jouranl" initial />
                    <Scene key="newbg" hideNavBar={false} component={NewBGFrom} title="Add New BG"  />
                </Stack>
            </Stack>


        </Router>
    );
};


export default RouterComponent;