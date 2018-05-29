import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import startTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {

    _loginHandler = () => {
        startTabs();
    }

    render() {
        return (
            <View>
                <Text>Auth Screen</Text>
                <Button title='Login' onPress={this._loginHandler}/>
            </View>
        );
    }
}

export default AuthScreen;