import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import BasicButton from '../../common/BasicButton';
import ScreenContainer from '../../common/ScreenContainer';
import Title from '../../common/Title';
import TextBox from './TextBox';
import monologue from './TextBox/monologue';
import convertText from '../../../utils/convertText';
import { useDispatch } from 'react-redux';
import { setText } from '../../store/reducers/mainSlice';

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
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(monologue);

    const inputChangeHandler = (text) => {
        setInputValue(text);
    }

    const saveTextHandler = () => {
        const converted = convertText(inputValue);
        dispatch(setText(converted));
    }

    return (
        <ScreenContainer style={styles.container}>
            <Title> Add Text </Title>
            <TextBox value={inputValue} onChangeText={inputChangeHandler} />
            <BasicButton onPress={saveTextHandler}>
                Add
            </BasicButton>
            <BasicButton onPress={() => navigation.navigate('MainMenu')}>
                Back
            </BasicButton>
        </ScreenContainer>
    );
};

export default AddTextScreen;