import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemCliecked}>
        <View style={styles.listItem}>
            <Image resizeMode='cover'
                style={styles.placeImage}
                source={props.placeImage} />
            <Text>{props.placename}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        backgroundColor: '#eee',
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImage: {
        marginRight: 8,
        width: 32,
        height: 32
    }
})

export default listItem;