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

export const boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';

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
