import {black} from './colors';

const playfair = {
    color: black,
    fontFamily: 'Playfair Display',
    fontWeight: '700'
};

export const textStyles = {
    playfairLarge: {
        ...playfair,
        fontSize: 50
    },
    playfairMedium: {
        ...playfair,
        fontSize: 30
    },
    playfairSmall: {
        ...playfair,
        fontSize: 22
    },
    playfairTitle: {
        ...playfair,
        fontSize: 75
    },
    subHeader: {
        fontSize: 20
    }
};
