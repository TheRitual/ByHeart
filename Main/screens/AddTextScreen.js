import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
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
});

const AddTextScreen = ({ navigation }) => {
    const dimensions = useDimensions();

    return (
        <SafeAreaView style={styles.screen}>
            <BasicBackground>
                <Text style={{ color: theme.light }}> Add Text Screen </Text>
                <BasicButton onPress={() => navigation.navigate('MainMenu')}>
                    Back
                </BasicButton>
            </BasicBackground>
        </SafeAreaView>
    );
};

export default AddTextScreen;