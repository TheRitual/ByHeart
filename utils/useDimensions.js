import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const useDimensions = () => {
    const initial = {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        isLandscape: Dimensions.get('window').width > Dimensions.get('window').height,
        isPortrait: Dimensions.get('window').width < Dimensions.get('window').height,
        isSquare: Dimensions.get('window').width === Dimensions.get('window').height,
    }

    const [dimensions, setDimensions] = useState(initial);

    const changeHandler = () => {
        const newValue = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            isLandscape: Dimensions.get('window').width > Dimensions.get('window').height,
            isPortrait: Dimensions.get('window').width < Dimensions.get('window').height,
            isSquare: Dimensions.get('window').width === Dimensions.get('window').height,
        }
        setDimensions(newValue);
    }

    useEffect(() => {
        Dimensions.addEventListener("change", changeHandler);
        return () => {
            Dimensions.removeEventListener("change", changeHandler);
        };
    });

    return dimensions;
}

export default useDimensions;