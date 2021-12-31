import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BasicButton from '../../common/BasicButton';
import ScreenContainer from '../../common/ScreenContainer';
import Title from '../../common/Title';
import { selectText } from '../../store/reducers/mainSlice';
import theme from '../../theme/default';
import { useSelector } from 'react-redux';
import colorAlpha from 'color-alpha';
import AnswerButton from '../../common/AnswerButton';
import takeLast from '../../../utils/takeLast';
import takeNext from '../../../utils/takeNext';
import shuffleArray from '../../../utils/shuffleArray';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 50,
    },
    textContainer: {
        backgroundColor: 'transparent',
        flex: 3,
        borderRadius: 20,
        margin: 20,
        padding: 20,
    },
    lyrics: {
        flex: 1,
        fontSize: 25,
        textAlignVertical: 'center',
        textAlign: 'right',
        color: theme.light,
    },
    buttonsContainer: {
        flex: 7,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignContent: 'space-around',
    },
    gameContainer: {
        flex: 1,
        width: '100%',
    },
    answer: {
        width: '30%',
        height: '22%',
    },
    answerText: {
        fontSize: 18,
    },
});

const GuessNextScreen = ({ navigation }) => {
    const [cursor, setCursor] = useState(0);
    const [display, setDisplay] = useState([]);
    const [answers, setAnswers] = useState([]);
    const textArray = useSelector(selectText);
    const words = textArray.words;

    useEffect(() => {
        setDisplay(takeLast(words, cursor, 20));
        const next = takeNext(words, cursor, 20);
        setAnswers(shuffleArray(next, 12));
    }, [cursor]);



    const answerReactionHandler = () => {
        setCursor(cursor + 1);
    }

    return (
        <ScreenContainer style={styles.container}>
            <Title> Guess Next </Title>
            <View style={styles.gameContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.lyrics}>
                        {display.map((word, index) => {
                            const alpha = 1 - (display.length - index) * 0.05;
                            return (
                                <Text
                                    key={index}
                                    style={{ color: colorAlpha(theme.light, alpha) }}>
                                    {word.original}{` `}
                                </Text>
                            )
                        })}
                        {cursor === 0 ? `?` : '...'}
                    </Text>
                </View>

                <View style={styles.buttonsContainer}>
                    {answers.map(item => {
                        return (
                            <AnswerButton key={item.id} onPress={answerReactionHandler} textStyle={styles.answerText} style={styles.answer}>
                                {item.text}
                            </AnswerButton>
                        );
                    })}
                </View>
            </View>
            <BasicButton onPress={() => navigation.navigate('MainMenu')}>
                Back
            </BasicButton>
        </ScreenContainer>
    );
};

export default GuessNextScreen;