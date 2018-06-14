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
import ImagePicker from '../../components/ImagePicker/ImagePicker';
import LocationPicker from '../../components/LocationPicker/LocationPicker';

import MainText from '../../components/UI/MainText/MainText';
import HeaderText from '../../components/UI/HeaderText/HeaderText';


class SharePlaceScreen extends Component {

    static navigatorStyle = {
        navBarButtonColor: 'orange'
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent);
    }

    state = {
        placeName: ''
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
        const placeName = this.state.placeName.trim();
        if (placeName !== '') {
            this.props.onAddPlace(placeName);
        }
    }

    onPlaceChangeListener = (value) => {
        this.setState({ placeName: value });
    }

    render() {
        return (
            <ScrollView>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <MainText>
                        <HeaderText>Share a Place with us!</HeaderText>
                    </MainText>

                    <ImagePicker />

                    <LocationPicker />

                    <PlaceInput
                        placeName={this.state.placeName}
                        onTextChange={this.onPlaceChangeListener} />

                    <View style={styles.buttonContainer}>
                        <Button title='Share the Place!' onPress={this._placeAddedHandler} />
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
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);