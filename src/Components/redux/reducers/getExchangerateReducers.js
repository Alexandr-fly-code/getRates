export default function getExchangerateReducers(state = [], action) {
    switch (action.type){
        case 'ADD_CURRENCY':
            return action.data;
        default: return state;
    }
}