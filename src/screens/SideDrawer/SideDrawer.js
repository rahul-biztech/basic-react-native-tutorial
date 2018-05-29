import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

class SideDrawer extends Component {

    componentDidMount() {
        const width = Dimensions.get('window').width;
        console.log("rv911: Side Drawer width: " + width);
    }

    // <View style={[styles.container,
    //     { width: Dimensions.get('window').width * 1 }]}>

    render() {
        return (
            <View style={[styles.container,
            { width: Dimensions.get('window').width * 0.8 }]}>
                <Text>SideDrawer</Text>
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