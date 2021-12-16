import React from 'react';
import { View, StyleSheet } from 'react-native';
import MenuButton from './MenuButton';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});

const Menu = (props) => {
    return (
        <View {...props} style={{ ...props.style, ...styles.container }}>
            <MenuButton>Start</MenuButton>
            <MenuButton>Add Text</MenuButton>
            <MenuButton>Options</MenuButton>
        </View>
    );
}

export default Menu;