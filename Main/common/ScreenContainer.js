import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import useDimensions from '../../utils/useDimensions';
import theme from '../theme/default';
import BasicBackground from './BasicBackground';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.dark,
    },
});

const ScreenContainer = (props) => {
    const dimensions = useDimensions();

    const calculatedStyles = {
        menuContainer: {
            flexDirection: dimensions.isLandscape ? 'row' : 'column',
        },
    }

    return (
        <SafeAreaView style={styles.screen}>
            <BasicBackground {...props} style={{ ...calculatedStyles.menuContainer, ...props.style }}>
                {props.children}
            </BasicBackground>
        </SafeAreaView>
    );
}

export default ScreenContainer;