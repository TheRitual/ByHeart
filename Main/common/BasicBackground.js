import React from 'react';
import { ImageBackground } from 'react-native';

const BasicBackground = (props) => {
    const { file } = props;
    const uri = file ? file : require('../../assets/images/background.png');
    return (
        <ImageBackground
            {...props}
            style={{ width: '100%', height: '100%', ...props.style }}
            source={uri}
            resizeMode='cover'>
            {props.children}
        </ImageBackground>
    );
}

export default BasicBackground;