import React from 'react';
import { TOGGLE_ITEM} from '../actions';

const initialState = {
    totalCost: 1000,
}
const reducer = (state = {initialState}, action) => {
    switch(action.type) {
        case TOGGLE_ITEM:
            console.log('Tears')
            return state;
        default:
            return state;
    }
};

export default reducer;