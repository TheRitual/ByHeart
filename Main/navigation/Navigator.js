import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AddTextScreen from "../screens/AddTextScreen";
import GuessNextScreen from "../screens/GuessNextScreen";
import MainMenuScreen from "../screens/MainMenuScreen";
import OptionsScreen from "../screens/OptionsScreen";
import StartScreen from "../screens/StartScreen";
import theme from '../theme/default';

const Navigator = createStackNavigator({
    MainMenu: {
        screen: MainMenuScreen,
    },
    Start: {
        screen: StartScreen,
    },
    AddText: {
        screen: AddTextScreen,
    },
    Options: {
        screen: OptionsScreen,
    },
    GuessNext: {
        screen: GuessNextScreen,
    },
}, {
    defaultNavigationOptions: {
        headerTintColor: theme.header.text,
        headerStyle: {
            backgroundColor: theme.header.background,
        },
        headerShown: false,
    }
});

export default createAppContainer(Navigator);