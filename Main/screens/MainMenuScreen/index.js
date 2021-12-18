import React from 'react';
import { StyleSheet } from 'react-native';
import useDimensions from '../../../utils/useDimensions';
import ScreenContainer from '../../common/ScreenContainer';
import Logo from "./Logo";
import Menu from "./Menu";

const styles = StyleSheet.create({
    logo: {
        flex: 4,
    },
    menu: {
        flex: 6,
    }
});

const MainMenuScreen = ({ navigation }) => {
    const dimensions = useDimensions();

    const calculatedStyles = StyleSheet.create({
        logo: {
            paddingLeft: dimensions.isLandscape ? '5%' : 0,
        },
        menu: {
            paddingTop: dimensions.isLandscape ? '5%' : '1%',
        }
    });

    return (
        <ScreenContainer>
            <Logo style={{ ...styles.logo, ...calculatedStyles.logo }} />
            <Menu style={{ ...styles.menu, ...calculatedStyles.menu }} goTo={navigation.navigate} />
        </ScreenContainer>
    );
};

export default MainMenuScreen;