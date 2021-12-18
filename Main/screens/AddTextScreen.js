import React from 'react';
import ScreenContainer from '../common/ScreenContainer';
import AddText from '../modules/AddText';

const AddTextScreen = ({ navigation }) => {

    return (
        <ScreenContainer>
            <AddText navigation={navigation} />
        </ScreenContainer>
    );
};

export default AddTextScreen;