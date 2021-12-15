import React from 'react';
import { StatusBar } from 'react-native';
import Navigator from './navigation/Navigator';
import theme from './theme/default';

const Main = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={theme.default.background} translucent={false} />
            <Navigator />
        </>

    );
}

export default Main;