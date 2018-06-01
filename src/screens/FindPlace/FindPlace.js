import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { selectPlace } from '../../store/actions/index';

import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {

    static navigatorStyle = {
        navBarButtonColor: 'orange'
    }

    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent);
    }

    _onNavigatorEvent = (event) => {
        if(event.type === 'NavBarButtonPress') {
            if(event.id === 'sideDrawerToggle'){
                this.props.navigator.toggleDrawer({
                    side: 'left'
                })
            }
        }
        console.log(event);
    }

    _placeSelectedHandler = (key) => {
        const selPlace = this.props.places.find(place => {
            return place.key === key;
        });
        this.props.navigator.push({
            screen: 'com.rahul.PlaceDetailScreen',
            title: selPlace.name,
            passProps: {
                selectedPlace: selPlace 
            }
        });
    };

    render() {
        return (
            <View>
                <PlaceList
                    places={this.props.places}
                    onItemSelected={this._placeSelectedHandler} />
            </View>
        );
    } 
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}

export default connect(mapStateToProps)(FindPlaceScreen);