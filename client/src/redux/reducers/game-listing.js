const reducer = (state = {games: []}, action) => {
    switch (action.type) {
        case 'LIST_GAMES':
            return {
                ...state,
                games: action.payload.games,
            };
        case 'GAME_RATED':
            const games = state.games.map(game => {
                if (action.payload.rating.game !== game._id) {
                    return game
                } else {
                    game.ratings.push(action.payload.rating);
                    return game;
                }
            });


            return {
                ...state,
                games: [...games],
            };

        default:
            return state;
    }
};

export default reducer;
