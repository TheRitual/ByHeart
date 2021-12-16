import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import theme from '../theme/default';

const styles = StyleSheet.create({
    text: {
        color: theme.light,
        fontFamily: 'retro',
        fontSize: 50,
    },
    container: {
        backgroundColor: theme.dark,
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