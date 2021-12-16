import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: '100%',

    }
});

const Logo = (props) => {
    return (
        <View {...props}>
            <Image source={require('../../../../assets/images/logo.png')} style={styles.logo} />
        </View>
    );
}

export default Logo;