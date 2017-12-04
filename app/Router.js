import React from 'react';
import { Router, Scene, Stack,ActionConst } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import BglstForm from './Components/bgLst';
import NewBGFrom from './Components/newBG';

const RouterComponent = () => {
    return (
        <Router >
            <Stack key="root" hideNavBar>
                <Stack key="auth" hideNavBar>
                    <Scene key="login" hideNavBar component={LoginForm} title="Please Login" initial />
                </Stack>

                <Stack key="BG"  hideNavBar >
                    <Scene key="bglst"  hideNavBar={false} init component={BglstForm} title="BG Jouranl"  />
                    <Scene key="newbg"  back={false} hideNavBar={false} component={NewBGFrom} title="Add New BG"  />
                </Stack>
            </Stack>


        </Router>
    );
};


export default RouterComponent;