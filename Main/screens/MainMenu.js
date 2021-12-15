import React from 'react';
import { Text, View } from 'react-native';

const MainMenu = ({ navigation }) => {

    return (
        <View>
            <Text> Main Menu</Text>
        </View>
    );
};

MainMenu.navigationOptions = {
    headerTitle: 'ByHeart',
};

export default MainMenu;