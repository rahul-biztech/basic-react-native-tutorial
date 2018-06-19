import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView,
    Image,
    KeyboardAvoidingView
} from 'react-native';

import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import PickImage from '../../components/PickImage/PickImage';
import LocationPicker from '../../components/LocationPicker/LocationPicker';

import MainText from '../../components/UI/MainText/MainText';
import HeaderText from '../../components/UI/HeaderText/HeaderText';
import validate from '../../utility/validation';


class SharePlaceScreen extends Component {

    static navigatorStyle = {
        navBarButtonColor: 'orange'
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent);
    }

    state = {
        controls: {
            placeName: {
                value: "",
                isValid: false,
                isTouched: false,
                validationRules: {
                    notEmpty: true
                }
            },
            location: {
                value: null,
                isValid: false
            },
            pickedImage:{
                value: null,
                isValid: false
            }
        }
    };

    _onNavigatorEvent = (event) => {
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'sideDrawerToggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left'
                })
            }
        }
    }

    _placeAddedHandler = () => {
        this.props.onAddPlace(
            this.state.controls.placeName.value,
            this.state.controls.location.value,
            this.state.controls.pickedImage.value
        );
    }

    onTextChangeListener = (key, value) => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        isValid: validate(value, prevState.controls[key].validationRules, null),
                        isTouched: true
                    }
                }
            };
        });
    }

    locationPickedHandler = (location) => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    location: {
                        value: location,
                        isValid: true
                    }
                }
            };
        });
    }

    imagePickHandler = (image) => {
        console.log("Picked Image: "+JSON.stringify(image));
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    pickedImage: {
                        value: image,
                        isValid: true
                    }
                }
            }
        })
    }

    render() {
        return (
            <ScrollView>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <MainText>
                        <HeaderText>Share a Place with us!</HeaderText>
                    </MainText>

                    <PickImage 
                        onPickImage={this.imagePickHandler}/>

                    <LocationPicker
                        onPickLocation={this.locationPickedHandler} />

                    <PlaceInput
                        placeName={this.state.placeName}
                        onTextChange={(value) => this.onTextChangeListener("placeName", value)} />

                    <View style={styles.buttonContainer}>
                        <Button
                            title='Share the Place!'
                            onPress={this._placeAddedHandler}
                            disabled={
                                !this.state.controls.placeName.isValid ||
                                !this.state.controls.location.isValid ||
                                !this.state.controls.pickedImage.isValid
                            } />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 8,
        marginBottom: 16,
    },
});

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName, location, pickedImage) => dispatch(addPlace(placeName, location, pickedImage))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);