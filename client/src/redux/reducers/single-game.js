const reducer = (state = { game: {}}, action) => {
    console.log('from reducer', action.payload)
    switch (action.type) {
        case 'GET_SINGLE_GAME':
            console.log('test')
            return {
                ...state,
                game: action.payload.game,
            };

        default: return state;
    }
};

export default reducer;
