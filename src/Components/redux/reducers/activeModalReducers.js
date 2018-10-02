export default function activeModalReducers(state = false, actions) {
    switch (actions.type){
        case 'IS_ACTIVE':
            return !state;
        default: return state;
    }
}