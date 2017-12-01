import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import {Actions} from'react-native-router-flux';
import { Card, CardSection, Input, Spinner } from './common'
import firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', pass: '', error: '', loading: false, isLoggedIn: false };




    onLogin() {
        this.setState({ error: '', loading: true })
        const { email, pass } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, pass)
                    .then(this.onRegister .bind(this))
                    .catch(this.onLoginFailed.bind(this))
            });
    }

    onLoginFailed() {
        
        this.setState({ error: 'Password Wrong', loading: false });
    }
    onLoginSuccess() {
        Toast.show('You logged in Successfully!', Toast.LONG);
        this.setState({
            error: '',
            loading: false,
            email: '',
            pass: ''
        });
       Actions.BG();
    }

    onRegister() {
        Toast.show('You Registerd Successfully!', Toast.SHORT);
        this.setState({
            error: '',
            loading: false,
            email: '',
            pass: '' //add here a comfirmation for password 
        });
    }

    renderBtn() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }
        return (
            <Button
                iconRight={{ name: 'send', size: 32, color: 'white' }}
                buttonStyle={{ backgroundColor: '#00b764', borderRadius: 10 }}
                textStyle={{ textAlign: 'center' }}
                fontSize={26}
                title={`Login/Sign up`}
                onPress={this.onLogin.bind(this)}
            />
        );


    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        keytype='email-address'
                        placeHolder='Google@gmail.com'
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email} />
                </CardSection>
                <CardSection>
                    <Input
                        securetxt
                        label='Password'
                        placeHolder='password'
                        onChangeText={(pass) => this.setState({ pass })}
                        value={this.state.pass} />
                </CardSection>
                <CardSection style={{ borderRadius: 10 }}>
                    {this.renderBtn()}

                </CardSection>
                <CardSection style={{ borderRadius: 10 }}>
                    <Text style={{ fontSize: 20, color: 'red' }}>
                        {this.state.error}
                    </Text>
                </CardSection>
            </Card >
        );
    }


}
export default LoginForm;