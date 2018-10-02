export default function passReducers(state = '', action) {
    switch (action.type){
        case 'PASS':
            return action.value;
        default: return state;
    }
}