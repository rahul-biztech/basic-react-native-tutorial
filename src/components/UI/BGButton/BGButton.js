import React from 'react';
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    Text,
    StyleSheet,
    View,
    Platform
} from 'react-native';

const bgButton = props => {

    const content = (
        <View style={[styles.container, { backgroundColor: props.color }]}>
            <Text style={{ color: props.textColor }}>{props.children}</Text>
        </View>
    );

    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback onPress={props.onPress}>
                {content}
            </TouchableNativeFeedback>
        )
    };

    return (
        <TouchableOpacity onPress={props.onPress}>
            {content}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        margin: 4,
        padding: 8,
        borderRadius: 4,
        borderColor: '#aaa',
        borderWidth: 1,
    }
});

export default bgButton;