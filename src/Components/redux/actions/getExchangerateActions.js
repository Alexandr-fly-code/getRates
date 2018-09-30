import axios from 'axios';

function addExchange(data) {
    return {
        type: 'ADD_CURRENCY',
        data,
    }
}

function getExchange() {
    return axios.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3`)
        .then(data => data.status === 200 ? data.data : [])
        .catch(error => console.log('Getting data from server error: ' + error));
}

export const getExchangeAsync = () => dispatch => {
    getExchange()
        .then(data => dispatch(addExchange(data)));
};
