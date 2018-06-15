import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import startTabs from '../MainTabs/startMainTabs';
import AppInput from '../../components/UI/AppInput/AppInput';
import HeaderText from '../../components/UI/HeaderText/HeaderText';
import MainText from '../../components/UI/MainText/MainText';

import backgroundImage from '../../assets/bg_login.jpg';
import BGButton from '../../components/UI/BGButton/BGButton';
import validate from '../../utility/validation';

import { connect } from 'react-redux';
import { tryAuth } from '../../store/actions';

class AuthScreen extends Component {

    state = {
        isPortraitMode: true,
        authMode: 'login',
        controls: {
            email: {
                value: '',
                isValid: false,
                validationRules: {
                    isEmail: true
                },
                isTouched: false
            },
            password: {
                value: '',
                isValid: false,
                validationRules: {
                    minLength: 6
                },
                isTouched: false
            },
            confirmPassword: {
                value: '',
                isValid: false,
                validationRules: {
                    equalTo: 'password'
                },
                isTouched: false
            },
        }
    }

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.onOrientationChanged);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.onOrientationChanged);
    }

    onOrientationChanged = (dims) => {
        this.setState({
            isPortraitMode: Dimensions.get('window').height > 500
        });
    }

    onAuthModeToggle = () => {
        this.setState(prevState => {
            return {
                authMode: prevState.authMode === 'login' ? 'signup' : 'login'
            };
        });
    };

    _loginHandler = () => {
        const authData = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value
        }
        this.props.onLogin(authData);
        startTabs();
    }

    onTextChangedListener = (key, value) => {
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
            const equalControl = this.state.controls[key].validationRules.equalTo;
            const equalValue = this.state.controls[equalControl].value;
            connectedValue = {
                ...connectedValue,
                equalTo: equalValue
            }
            //console.log("Connected Value: " + JSON.stringify(connectedValue));
        }

        if (key === 'password') {
            connectedValue = {
                ...connectedValue,
                equalTo: value
            };
        }
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    confirmPassword: {
                        ...prevState.controls.confirmPassword,
                        isValid: key === 'password'
                            ? validate(prevState.controls.confirmPassword.value,
                                prevState.controls.confirmPassword.validationRules,
                                connectedValue)
                            : prevState.controls.confirmPassword.isValid
                    },
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        isValid: validate(value, prevState.controls[key].validationRules, connectedValue),
                        isTouched: true
                    }
                }
            }
        })
    }

    render() {

        let headingText = null;
        let confirmPasswordView = null;
        if (this.state.isPortraitMode) {
            headingText = <HeaderText>Please Log In</HeaderText>
        }

        if (this.state.authMode === 'signup') {
            confirmPasswordView = (
                <View style={this.state.isPortraitMode ? styles.portPasswordWrapper : styles.landPasswordWrapper}>
                    <AppInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        value={this.state.controls.confirmPassword.value}
                        isValid={this.state.controls.confirmPassword.isValid}
                        isTouched={this.state.controls.confirmPassword.isTouched}
                        onChangeText={(value) => this.onTextChangedListener("confirmPassword", value)}
                        secureTextEntry={true} />
                </View>
            );
        }

        return (
            <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior='padding'>

                    <MainText>
                        {headingText}
                    </MainText>

                    <BGButton
                        color='#29aaf4'
                        textColor='white'
                        onPress={this.onAuthModeToggle}>
                        Switch to {this.state.authMode === 'login' ? 'Sign Up' : 'Login'}
                    </BGButton>

                    <TouchableWithoutFeedback
                        onPress={Keyboard.dismiss}>
                        <View style={styles.inputContainer}>

                            <AppInput
                                style={styles.input}
                                placeholder="Your Email Address"
                                value={this.state.controls.email.value}
                                isValid={this.state.controls.email.isValid}
                                isTouched={this.state.controls.email.isTouched}
                                onChangeText={(value) => this.onTextChangedListener("email", value)}
                                keyboardType='email-address' />

                            <View style={
                                this.state.isPortraitMode
                                    ? styles.portPasswordContainer
                                    : styles.landPasswordContainer}>
                                <View style={
                                    this.state.isPortraitMode || this.state.authMode === 'login'
                                        ? styles.portPasswordWrapper
                                        : styles.landPasswordWrapper}>
                                    <AppInput
                                        style={styles.input}
                                        placeholder="Password"
                                        value={this.state.controls.password.value}
                                        isValid={this.state.controls.password.isValid}
                                        isTouched={this.state.controls.password.isTouched}
                                        onChangeText={(value) => this.onTextChangedListener("password", value)}
                                        secureTextEntry={true} />
                                </View>

                                {confirmPasswordView}
                            </View>

                        </View>
                    </TouchableWithoutFeedback>
                    <BGButton
                        color='#29aaf4'
                        textColor='white'
                        onPress={this._loginHandler}
                        disabled={
                            false
                            // !this.state.controls.email.isValid ||
                            // !this.state.controls.password.isValid ||
                            // !this.state.controls.confirmPassword.isValid && this.state.authMode === 'signup'
                        }>
                        Submit
                    </BGButton>
                </KeyboardAvoidingView>
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

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (authData) => dispatch(tryAuth(authData))
    }
}

export default connect(null, mapDispatchToProps)(AuthScreen);