import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ImageBackground, Dimensions } from 'react-native';
import startTabs from '../MainTabs/startMainTabs';
import AppInput from '../../components/UI/AppInput/AppInput';
import HeaderText from '../../components/UI/HeaderText/HeaderText';
import MainText from '../../components/UI/MainText/MainText';

import backgroundImage from '../../assets/bg_login.jpg';
import BGButton from '../../components/UI/BGButton/BGButton';

class AuthScreen extends Component {

    state = {
        isPortraitMode: true
    }

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.onOrientationChanged);
    }

    componentWillUnmount(){
        Dimensions.removeEventListener("change", this.onOrientationChanged);
    }

    onOrientationChanged = (dims) => {
        this.setState({
            isPortraitMode: Dimensions.get('window').height > 500
        });
    }

    _loginHandler = () => {
        startTabs();
    }

    render() {

        let headingText = null;
        if (this.state.isPortraitMode) {
            headingText = <HeaderText>Please Log In</HeaderText>
        }

        return (
            <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
                <View style={styles.container}>

                    <MainText>
                        {headingText}
                    </MainText>

                    <BGButton color='#29aaf4' textColor='white' onPress={() => { }}>Switch to Login</BGButton>

                    <View style={styles.inputContainer}>

                        <AppInput style={styles.input} placeholder="Your Email Address" />

                        <View style={this.state.isPortraitMode ? styles.portPasswordContainer : styles.landPasswordContainer}>
                            <View style={this.state.isPortraitMode ? styles.portPasswordWrapper : styles.landPasswordWrapper}>
                                <AppInput style={styles.input} placeholder="Password" />
                            </View>

                            <View style={this.state.isPortraitMode ? styles.portPasswordWrapper : styles.landPasswordWrapper}>
                                <AppInput style={styles.input} placeholder="Confirm Password" />
                            </View>

                        </View>

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
    portPasswordContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    landPasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    portPasswordWrapper: {
        width: "100%",
    },
    landPasswordWrapper: {
        width: "48.5%",
    }
});

export default AuthScreen;