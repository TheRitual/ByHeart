import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainMenu from '../screens/MainMenu';
import theme from '../theme/default';

const Navigator = createStackNavigator({
    MainMenu: {
        screen: MainMenu,

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