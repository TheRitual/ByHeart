import React from 'react';
import { ImageBackground } from 'react-native';

const BasicBackground = (props) => {
    return (
        <ImageBackground
            {...props}
            style={{ width: '100%', height: '100%', ...props.style }}
            source={require('../../assets/images/background.png')}
            resizeMode='cover'>
            {props.children}
        </ImageBackground>
    );
}

export default BasicBackground;