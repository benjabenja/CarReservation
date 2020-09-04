import axios from 'axios';

export const getCars = () => dispatch => {

    alert('in')
    axios.get(`http://localhost:8181/products`).then(res => {

        dispatch({
            type: 'GET_CARS',
            payload: res.data
        });
    }
    );
};