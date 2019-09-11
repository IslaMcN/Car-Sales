import React from 'react';

//Toogle item and pass the item to reducer

const toggleItem = item => {
    return{type: TOGGLE_ITEM, payload: item};
};

const TOGGLE_ITEM ="TOGGLE_ITEM";

export default toggleItem;