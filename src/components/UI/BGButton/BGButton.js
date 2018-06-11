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
        <View style={[
            styles.container,
            { backgroundColor: props.color },
            props.disabled ? styles.disabled : null
        ]}>
            <Text style={[
                { color: props.textColor, fontSize: 18 },
                props.disabled ? styles.disabledText : null
            ]}>{props.children}</Text>
        </View>
    );

    if (props.disabled) {
        return content;
    }

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
        padding: 10,
        borderRadius: 4,
        borderColor: '#29aaf4',
        borderWidth: 1,
    },
    disabled: {
        backgroundColor: '#eee',
        borderColor: '#aaa'
    },
    disabledText: {
        color: '#aaa'
    }

});

export default bgButton;