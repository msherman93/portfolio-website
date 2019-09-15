import {darkGrey, white} from './colors';

const centered = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
};

export const centeredRow = {
    ...centered,
    flexDirection: 'row'
};
export const centeredColumn = {
    ...centered,
    flexDirection: 'column'
};

export const boxShadow = '0px 3px 6px #00000029';

export const boxWrapper = {
    ...centeredColumn,
    backgroundColor: white,
    borderColor: darkGrey,
    borderWidth: 1,
    justifyContent: 'center',
    padding: '5%'
};

export const cardWrapper = {
    ...boxWrapper,
    borderRadius: 10,
    boxShadow,
    margin: '2%',
    padding: '2%'
};