import {darkGrey, white} from './colors';

export const centeredColumn = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
};

export const boxWrapper = {
    ...centeredColumn,
    backgroundColor: white,
    borderColor: darkGrey,
    borderWidth: 1,
    justifyContent: 'center',
    margin: '2%',
    maxWidth: 1200,
    padding: '5%',
    width: '93%'
};
