import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import useDimensions from '../../../utils/useDimensions';
import BasicButton from '../../common/BasicButton';
import ScreenContainer from '../../common/ScreenContainer';
import Title from '../../common/Title';
import TextBox from './TextBox';
import monologue from './TextBox/monologue';
import convertText from '../../../utils/convertText';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 50,
    },
});

const AddTextScreen = ({ navigation }) => {
    const dimensions = useDimensions();
    const [inputValue, setInputValue] = useState(monologue);

    const calculatedStyles = StyleSheet.create({

    });

    const inputChangeHandler = (text) => {
        setInputValue(text);
    }

    return (
        <ScreenContainer style={styles.container}>
            <Title> Add Text </Title>
            <TextBox value={inputValue} onChangeText={inputChangeHandler} />
            <BasicButton onPress={() => console.log(convertText(inputValue))}>
                Add
            </BasicButton>
            <BasicButton onPress={() => navigation.navigate('MainMenu')}>
                Back
            </BasicButton>
        </ScreenContainer>
    );
};

export default AddTextScreen;