import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';

import { getPlaces } from '../../store/actions/index';

import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {

    static navigatorStyle = {
        navBarButtonColor: 'orange'
    }

    state = {
        hasPlaces: false,
        removeAnim: new Animated.Value(1),
        placeAnim: new Animated.Value(0.01)

    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent);
    }

    componentDidMount() {
        this.props.onLoadPlaces();
    }

    _onNavigatorEvent = (event) => {
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'sideDrawerToggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left'
                })
            }
        }
        console.log(event);
    }

    _placeSelectedHandler = (id) => {
        console.log("Selected Place Id: " + id);
        const selPlace = this.props.places.find(place => {
            return place.id === id;
        });
        console.log("Selected Place: " + selPlace);
        this.props.navigator.push({
            screen: 'com.rahul.PlaceDetailScreen',
            title: selPlace.name,
            passProps: {
                selectedPlace: selPlace
            }
        });
    };

    _placeLoadedHandler = () => {
        Animated.timing(this.state.removeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    }

    onSearchButtonClick = () => {
        Animated.timing(this.state.removeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(() => {
            this.setState({
                hasPlaces: true
            });
            this._placeLoadedHandler();
        });
    };

    render() {

        let content = (
            <Animated.View style={[styles.searchButton, {
                opacity: this.state.removeAnim,
                transform: [{
                    scale: this.state.removeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [10, 1]
                    })
                }]
            }]}>
                <TouchableOpacity onPress={this.onSearchButtonClick}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.searchButtonText}>Find Places</Text>
                    </View>
                </TouchableOpacity>

            </Animated.View>
        );

        if (this.state.hasPlaces) {
            console.log(JSON.stringify(this.props.places));
            content = (
                <PlaceList
                    places={this.props.places}
                    onItemSelected={this._placeSelectedHandler} />
            )
        }

        return (
            <View style={!this.state.hasPlaces ? styles.searchButtonContainer : null}>
                {content}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchButton: {
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 40,
        padding: 16,
    },
    searchButtonText: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 20,
    }
});

const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadPlaces: () => dispatch(getPlaces())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen);