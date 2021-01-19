const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                player1: action.payload
            };
        case 'SETTING':
            return {
                ...state,
                player2: action.payload
            };
        case 'RESET':
            return {
                ...state,
                Reset: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;