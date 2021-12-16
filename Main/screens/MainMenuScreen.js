import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import useDimensions from '../../utils/useDimensions';
import BasicBackground from '../common/BasicBackground';
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
    }
});

const MainMenuScreen = ({ navigation }) => {
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
            <BasicBackground style={calculatedStyles.menuContainer}>
                <Logo style={{ ...styles.logo, ...calculatedStyles.logo }} />
                <Menu style={{ ...styles.menu, ...calculatedStyles.menu }} goTo={navigation.navigate} />
            </BasicBackground>
        </SafeAreaView>
    );
};

export default MainMenuScreen;