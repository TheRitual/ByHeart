import * as Font from 'expo-font';

const fetchFonts = () => {
    return Font.loadAsync({
        'Lato' : require('../assets/fonts/Lato-Regular.ttf'),
        'Lato-Bold' : require('../assets/fonts/Lato-Bold.ttf'),
        '8bit' : require('../assets/fonts/VT323-Regular.ttf'),
    });
}

export default fetchFonts;