import React from 'react';
import { REMOVE_ITEM, ADD_ITEM} from '../actions';


const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    Store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            console.log('Tears')
            let features = state.car.features;
            features.push(action.payload);
            let additionalPrice = state.additionalPrice + action.payload.price;
            return {
                ...state,
                car: {...state.car, features},
            }
        case REMOVE_ITEM:
            let removeItem = state.car.features;
            removeItem.splice(
                removeItem.findIndex(item => item.id === action.payload.id),
                1
            )
            let newPrice = state.additionalPrice - action.payload.price;
            return{...state,
            car: {...state.car, removeItem},
        additionalPrice: newPrice,
    };
        default:
            return state;
    }
};

export default reducer;