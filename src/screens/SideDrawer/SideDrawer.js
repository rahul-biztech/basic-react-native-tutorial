import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Platform } from 'react-native';

import SideDrawerButton from './SideDrawerButton';


class SideDrawer extends Component {

    componentDidMount() {
        const width = Dimensions.get('window').width;
        console.log("rv911: Side Drawer width: " + width);
    }

    onSignoutClickListener = () => {
        alert('Button clicked!')
    }

    render() {
        return (
            <View 
                style={[
                    styles.container,
                    { width: Dimensions.get('window').width * 0.8 }
                ]}>

                <SideDrawerButton
                    icon={Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out'}
                    onButtonClick={this.onSignoutClickListener}>
                    Sign Out</SideDrawerButton>

                <SideDrawerButton
                    icon={Platform.OS === 'android' ? 'md-help-circle' : 'ios-help-circle'}
                    onButtonClick={this.onSignoutClickListener}>
                    Help</SideDrawerButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white'
    }
})

export default SideDrawer;