import React from 'react';
import { Router,Scene,  Stack } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="global">
                <Scene
                    key="login"
                    component={LoginForm}
                    title="Please Login" 
                    initial/>
            </Stack>
        </Router>
    );
};


export default RouterComponent;