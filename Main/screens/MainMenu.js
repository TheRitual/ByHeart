import React from 'react';
import { StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import useDimensions from '../../utils/useDimensions';
import Logo from '../modules/mainMenu/Logo';
import Menu from '../modules/mainMenu/Menu';
import theme from '../theme/default';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.dark,
    },
    square: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1%',
    },
    background: {
        width: '100%',
        height: '100%',
    }
});

const MainMenu = ({ navigation }) => {
    const dimensions = useDimensions();

    const calculatedStyles = {
        menuContainer: {
            flexDirection: dimensions.isLandscape ? 'row' : 'column',
        },
        square: {
            width: dimensions.isLandscape ? '49%' : '100%',
            height: dimensions.isLandscape ? '98%' : '100%',
        }
    }

    return (
        <SafeAreaView style={styles.screen}>
            <ImageBackground style={{ ...styles.background, ...calculatedStyles.menuContainer }} source={require('../../assets/images/background.png')} resizeMode='cover'>
                <Logo style={{ ...styles.square, ...calculatedStyles.square }} />
                <Menu style={{ ...styles.square, ...calculatedStyles.square }} />
            </ImageBackground>
        </SafeAreaView>
    );
};

export default MainMenu;