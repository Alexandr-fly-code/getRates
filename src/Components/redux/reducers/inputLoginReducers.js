export default function loginReducers(state = '', action) {
    switch (action.type){
        case 'LOGIN':
            return action.value;
        default: return state;
    }
}