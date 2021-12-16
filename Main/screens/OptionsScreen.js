import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import useDimensions from '../../utils/useDimensions';
import BasicBackground from '../common/BasicBackground';
import BasicButton from '../common/BasicButton';
import theme from '../theme/default';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.dark,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 50,
    },
});

const OptionsScreen = ({ navigation }) => {
    const dimensions = useDimensions();

    return (
        <SafeAreaView style={styles.screen}>
            <BasicBackground>
                <View style={styles.container}>
                    <Text style={{ color: theme.light }}> Options Screen </Text>
                    <BasicButton onPress={() => navigation.navigate('MainMenu')}>
                        Back
                    </BasicButton>
                </View>
            </BasicBackground>
        </SafeAreaView>
    );
};

export default OptionsScreen;