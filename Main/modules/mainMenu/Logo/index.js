import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
    }
});

const Logo = (props) => {
    return (
        <View {...props} style={{ ...props.style, ...styles.container }}>
            <Image source={require('../../../../assets/images/logo.png')} resizeMode='contain' style={styles.logo} />
        </View>
    );
}

export default Logo;