
//import {GET_PRODUCTS } from "../src/actions/types"

const initialState = {
    cars: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_CARS':
            return {
                ...state,
                cars: action.payload,
            };
        default:
            return state;
    }
}