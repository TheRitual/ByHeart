import React from 'react';
import ScreenContainer from '../common/ScreenContainer';
import MainMenu from '../modules/MainMenu';


const MainMenuScreen = ({ navigation }) => {
    return (
        <ScreenContainer>
            <MainMenu navigation={navigation} />
        </ScreenContainer>
    );
};

export default MainMenuScreen;