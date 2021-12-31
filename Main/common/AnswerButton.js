import colorAlpha from 'color-alpha';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import theme from '../theme/default';

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        borderColor: theme.accent,
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: colorAlpha(theme.accent, 0.1),
    },
    text: {
        flex: 1,
        fontSize: 18,
        color: theme.light,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Lato-Bold',
    },
});

const AnswerButton = (props) => {
    return (
        <View style={{ ...props.style }}>
            <TouchableOpacity style={{ ...props.containerStyle, ...style.container }} onPress={props.onPress}>
                <Text style={{ ...props.textStyle, ...style.text }}>{props.children || props.text}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AnswerButton;