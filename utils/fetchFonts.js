import * as Font from 'expo-font';

const fetchFonts = () => {
    return Font.loadAsync({
        'Lato' : require('../assets/fonts/Lato-Regular.ttf'),
        'Lato-Bold' : require('../assets/fonts/Lato-Bold.ttf'),
        'retro' : require('../assets/fonts/VT323-Regular.ttf'),
    });
}

export default fetchFonts;