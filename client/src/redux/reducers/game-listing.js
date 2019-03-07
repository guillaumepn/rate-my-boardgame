const reducer = (state = { games: []}, action) => {
    switch (action.type) {
        case 'LIST_GAMES':
            return {
                ...state,
                games: action.payload.games,
            };

        default: return state;
    }
};

export default reducer;
