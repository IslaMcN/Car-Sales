import React from 'react';

//Toogle item and pass the item to reducer

const toggleItem = item => {
    return{type: TOGGLE_ITEM, payload: item};
};

export const removeItem = item => {
    return{type: REMOVE_ITEM, payload: item};
}
export const TOGGLE_ITEM ="TOGGLE_ITEM";
export const REMOVE_ITEM ="REMOVE_ITEM";
export default toggleItem;