import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../theme/default';

const styles = StyleSheet.create({
    text: {
        textShadowColor: theme.primary,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 20,
        lineHeight: 45,
        fontSize: 50,
        color: theme.light,
        fontFamily: 'retro',
    },
});

const Title = (props) => {
    return (
        <Text {...props} style={{ ...styles.text, ...props.style }}>
            {props.children}
        </Text>
    );
}

export default Title;