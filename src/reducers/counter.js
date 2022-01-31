const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;

        case 'INCREMENT-ONE':
            return state + 1;

        case 'DECREMENT':
            return state - action.payload;

        case 'DECREMENT-ONE':
            return state - 1;

        default:
            return state;
    }
}

export default counterReducer; 