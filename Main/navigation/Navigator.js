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
    }
});

export default createAppContainer(Navigator);