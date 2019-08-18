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

export const boxWrapper = {
    ...centeredColumn,
    backgroundColor: white,
    borderColor: darkGrey,
    borderWidth: 1,
    justifyContent: 'center',
    margin: '2%',
    maxWidth: 1100,
    padding: '5%',
    width: '93%'
};
