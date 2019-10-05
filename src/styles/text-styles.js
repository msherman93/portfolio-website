import {black, white} from './colors';

const playfair = {
    color: black,
    fontFamily: 'Playfair Display',
    fontWeight: '700'
};

export const playfairStyles = {
    large: {
        ...playfair,
        fontSize: 50
    },
    medium: {
        ...playfair,
        fontSize: 30
    },
    small: {
        ...playfair,
        fontSize: 22
    },
    title: {
        ...playfair,
        fontSize: 75
    }
};

export const robotoStyles = {
    large: {
        fontFamily: 'Roboto',
        fontSize: 35
    },
    largeWhite: {
        color: white,
        fontFamily: 'Roboto',
        fontSize: 35
    },
    medium: {
        fontFamily: 'Roboto',
        fontSize: 20
    },
    mediumWhite: {
        color: white,
        fontFamily: 'Roboto',
        fontSize: 20
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 50,
        fontWeight: '700'
    },
    titleWhite: {
        color: white,
        fontFamily: 'Roboto',
        fontSize: 50,
        fontWeight: '700'
    }
};
