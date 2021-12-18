import React from 'react';
import { StyleSheet } from 'react-native';
import BasicButton from '../../common/BasicButton';
import ScreenContainer from '../../common/ScreenContainer';
import Title from '../../common/Title';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 50,
    },
});

const OptionsScreen = ({ navigation }) => {
    return (
        <ScreenContainer style={styles.container}>
            <Title> Options </Title>
            <BasicButton onPress={() => navigation.navigate('MainMenu')}>
                Back
            </BasicButton>
        </ScreenContainer>
    );
};

export default OptionsScreen;