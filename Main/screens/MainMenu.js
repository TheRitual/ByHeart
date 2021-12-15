import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import useDimensions from '../../utils/useDimensions';
import theme from '../theme/default';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.dark,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: theme.light,
        borderWidth: 3,
        borderRadius: 20,
        margin: '1%',
    },
    menuContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: theme.light,
        borderWidth: 3,
        borderRadius: 20,
        margin: '1%',
    },
    bigText: {
        color: theme.light,
        fontSize: 100,
    }
});

const MainMenu = ({ navigation }) => {
    const dimensions = useDimensions();

    const calculatedStyles = {
        logoContainer: {
            flexDirection: dimensions.isLandscape ? 'row' : 'column',
        },
        squares: {
            width: dimensions.isLandscape ? '49%' : '100%',
            height: dimensions.isLandscape ? '98%' : '100%',
        }
    }

    return (
        <SafeAreaView style={{ ...styles.screen, ...calculatedStyles.logoContainer }}>
            <View style={{ ...styles.logoContainer, ...calculatedStyles.squares }}>
                <Text style={styles.bigText}>LOGO</Text>
            </View>
            <View style={{ ...styles.menuContainer, ...calculatedStyles.squares }}>
                <Text style={styles.bigText}>MENU</Text>
            </View>
        </SafeAreaView>
    );
};

export default MainMenu;