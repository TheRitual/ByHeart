import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import theme from '../../../../theme/default';

const styles = StyleSheet.create({
    text: {
        color: theme.light,
        fontFamily: 'retro',
        fontSize: 50,
    },
});

const MenuButton = (props) => {
    return (
        <TouchableOpacity {...props}>
            <Text style={styles.text}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
}

export default MenuButton;