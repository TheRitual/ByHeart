import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';
import Main from './Main';
import fetchFonts from './utils/fetchFonts';

enableScreens();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return fontsLoaded ?
    <Main />
    :
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={error => console.log("ERROR: ", error)} />
}

export default App;