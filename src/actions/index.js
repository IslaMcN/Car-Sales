import React from 'react';

//Toogle item and pass the item to reducer
export const ADD_ITEM ="ADD_ITEM";
const toggleItem = item => {
    return{type: ADD_ITEM, payload: item};
};

export const REMOVE_ITEM ="REMOVE_ITEM";
export const removeItem = item => {
    return{type: REMOVE_ITEM, payload: item};
}



export default toggleItem;