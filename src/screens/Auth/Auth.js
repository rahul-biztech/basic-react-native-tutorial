import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ImageBackground } from 'react-native';
import startTabs from '../MainTabs/startMainTabs';
import AppInput from '../../components/UI/AppInput/AppInput';
import HeaderText from '../../components/UI/HeaderText/HeaderText';
import MainText from '../../components/UI/MainText/MainText';

import backgroundImage from '../../assets/bg_login.jpg';
import BGButton from '../../components/UI/BGButton/BGButton';

class AuthScreen extends Component {

    _loginHandler = () => {
        startTabs();
    }

    render() {
        return (
            <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
                <View style={styles.container}>
                    <MainText>
                        <HeaderText>Please Log In</HeaderText>
                    </MainText>
                    <BGButton color='#29aaf4' textColor='white' onPress={() => { }}>Switch to Login</BGButton>
                    <View style={styles.inputContainer}>
                        <AppInput style={styles.input} placeholder="Your Email Address" />
                        <AppInput style={styles.input} placeholder="Password" />
                        <AppInput style={styles.input} placeholder="Confirm Password" />
                    </View>
                    <BGButton color='#29aaf4' textColor='white' onPress={this._loginHandler}>Submit</BGButton>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        width: '100%',
        flex: 1
    },
    inputContainer: {
        width: '80%',
        marginVertical: 8
    },
    input: {
        borderColor: '#777',
        borderWidth: 1,
        backgroundColor: '#ddd'
    },
});

export default AuthScreen;