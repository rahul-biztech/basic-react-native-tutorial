import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

class LocationPicker extends Component {

    state = {
        focusedLoaction: {
            latitude: 23.0225,
            longitude: 72.5714,
            latitudeDelta: 0.0122,
            longitudeDelta:
                Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
        }
    }

    onCurrentLocationClick = () => {

    }

    pickLocationHandler = (event) => {
        const coords = event.nativeEvent.coordinate;
        this.setState(prevState => {
            return {
                focusedLoaction: {
                    ...prevState
                }
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    initialRegion={this.state.focusedLoaction}
                    style={styles.mapContainer}
                    onPress={this.pickLocationHandler} />

                <View style={styles.buttonContainer}>
                    <Button title='Locate Me' onPress={() => { }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    mapContainer: {
        width: '100%',
        height: 250,
    },
    buttonContainer: {
        marginTop: 8,
        marginBottom: 16,
    },
});

export default LocationPicker;