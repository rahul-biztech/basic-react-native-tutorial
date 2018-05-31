import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const sideDrawerButton = props => (
    <TouchableOpacity style={styles.container} onPress={props.onButtonClick}>
        <View style={styles.drawerItemContainer}>
            <Icon name={props.icon} size={30} color='#333' />
            <Text style={styles.textStyle}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        marginBottom: 8,
    },
    drawerItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 16,
        padding: 8
    }
})

export default sideDrawerButton;