import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BasicButton from '../../common/BasicButton';
import ScreenContainer from '../../common/ScreenContainer';
import Title from '../../common/Title';
import { selectText } from '../../store/reducers/mainSlice';
import theme from '../../theme/default';
import { useSelector } from 'react-redux';
import colorAlpha from 'color-alpha';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 50,
    },
    textContainer: {
        backgroundColor: theme.light,
        flex: 3,
        borderRadius: 20,
        margin: 20,
        padding: 20,
    },
    lyrics: {
        flex: 1,
        fontSize: 20,
    },
    buttonsContainer: {
        flex: 7,
    },
    gameContainer: {
        flex: 1,
        width: '100%',
    }
});

const GuessNextScreen = ({ navigation }) => {
    const [cursor, setCursor] = useState(0);
    const [display, setDisplay] = useState([]);
    const textArray = useSelector(selectText);
    const words = textArray.words;

    const takeLast = (words, index, amount) => {
        const first = index - amount < 0 ? 0 : index - amount;
        return words.slice(first, index);
    }

    useEffect(() => {
        setDisplay(takeLast(words, cursor, 10));
    }, [cursor]);


    return (
        <ScreenContainer style={styles.container}>
            <Title> Guess Next </Title>
            <View style={styles.gameContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.lyrics}>
                        {display.map((word, index) => {
                            const alpha = 1 - (10 - index) * (1 / display.length);
                            return (
                                <Text
                                    key={index}
                                    style={{ color: colorAlpha('#000', alpha) }}>
                                    {word.original}{` `}
                                </Text>
                            )
                        })}
                    </Text>
                </View>

                <View style={styles.buttonsContainer}>
                    <Button title="Next" onPress={() => setCursor(cursor + 1)} />
                </View>

            </View>
            <BasicButton onPress={() => navigation.navigate('MainMenu')}>
                Back
            </BasicButton>
        </ScreenContainer>
    );
};

export default GuessNextScreen;