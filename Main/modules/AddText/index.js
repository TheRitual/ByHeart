import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import convertText from '../../../utils/convertText';
import useDimensions from '../../../utils/useDimensions';
import BasicButton from '../../common/BasicButton';
import Title from '../../common/Title';
import TextBox from './TextBox';
import monologue from './TextBox/monologue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 50,
    },
});

const AddText = ({ navigation }) => {
    const dimensions = useDimensions();
    const [inputValue, setInputValue] = useState(monologue);

    const calculatedStyles = StyleSheet.create({

    });

    const inputChangeHandler = (text) => {
        setInputValue(text);
    }

    return (
        <View style={styles.container}>
            <Title> Add Text </Title>
            <TextBox value={inputValue} onChangeText={inputChangeHandler} />
            <BasicButton onPress={() => console.log(convertText(inputValue))}>
                Add
            </BasicButton>
            <BasicButton onPress={() => navigation.navigate('MainMenu')}>
                Back
            </BasicButton>
        </View>
    );
}

export default AddText;