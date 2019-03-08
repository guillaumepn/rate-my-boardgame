const reducer = (state = {games: []}, action) => {
    switch (action.type) {
        case 'LIST_GAMES':
            return {
                ...state,
                games: action.payload.games,
            };
        case 'GAME_RATED':
            console.log('payload', action.payload)
            const games = state.games.map(game => {
                console.log('single game', game)
                if (action.payload.rating.game !== game._id) {
                    return game
                } else {
                    game.ratings.push(action.payload.rating);
                    return game;
                }
            });

            console.log('new state', games);

            return {
                ...state,
                games: games,
            };

        default:
            return state;
    }
};

export default reducer;
