import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        width: '96%',
        borderRadius: 30,
        padding: 30,
        textAlignVertical: 'top',
        fontSize: 20,
    }
});

const TextBox = (props) => {
    return (
        <TextInput {...props} onChange={props.onChange} multiline={true} style={{ ...styles.input, ...props.style }} />
    );
}

export default TextBox;