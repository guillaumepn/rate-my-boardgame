export const setGameList = (games = []) => {
    return {
        type: 'LIST_GAMES',
        payload: {
            games
        }
    }
};

export const gameListing = (dispatch) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/games`)
        .then(response => response.json())
        .then(data => dispatch(setGameList(data)))
        .catch(error => console.log(error));

    return {
        type: 'FETCH_GAMES',
        payload: {}
    }
};
