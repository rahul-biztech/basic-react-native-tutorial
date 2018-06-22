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
        marginHorizontal: 16,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImage: {
        marginRight: 8,
        width: 48,
        height: 48
    }
})

export default listItem;