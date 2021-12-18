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
    const { goTo } = props;
    return (
        <View {...props} style={{ ...props.style, ...styles.container }}>
            <MenuButton onPress={() => goTo('Start')}>Start</MenuButton>
            <MenuButton onPress={() => goTo('AddText')}>Add Text</MenuButton>
            <MenuButton onPress={() => goTo('Options')}>Options</MenuButton>
        </View>
    );
}

export default Menu;