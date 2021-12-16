import colorAlpha from 'color-alpha';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import theme from '../theme/default';

const styles = StyleSheet.create({
    text: {
        color: theme.accent,
        fontFamily: 'retro',
        fontSize: 40,
        textShadowColor: theme.secondary,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 20,
        lineHeight: 35,
    },
    container: {
        padding: 10,
        borderRadius: 20,
    }
});

const BasicButton = (props) => {
    return (
        <TouchableOpacity {...props} style={{ ...styles.container, ...props.style }}>
            <Text style={{ ...styles.text, ...props.textStyle }}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
}

export default BasicButton;