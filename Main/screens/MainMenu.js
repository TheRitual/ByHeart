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
    logo: {
        flex: 4,
    },
    menu: {
        flex: 6,
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
        logo: {
            paddingLeft: dimensions.isLandscape ? '5%' : 0,
        },
        menu: {
            paddingTop: dimensions.isLandscape ? '5%' : '1%',
        }
    }

    return (
        <SafeAreaView style={styles.screen}>
            <ImageBackground style={{ ...styles.background, ...calculatedStyles.menuContainer }} source={require('../../assets/images/background.png')} resizeMode='cover'>
                <Logo style={{ ...styles.logo, ...calculatedStyles.logo }} />
                <Menu style={{ ...styles.menu, ...calculatedStyles.menu }} />
            </ImageBackground>
        </SafeAreaView>
    );
};

export default MainMenu;