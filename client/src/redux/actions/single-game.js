export const setSingleGame = (game) => {
    console.log('hey', game)
    return {
        type: 'GET_SINGLE_GAME',
        payload: {
            game
        }
    }
};

export const singleGame = (id, dispatch) => {
    console.log('in first action', id);
    fetch(`${process.env.REACT_APP_SERVER_URL}/games/single/${id}`)
        .then(response => response.json())
        .then(data => dispatch(setSingleGame(data)))
        .catch(error => console.log(error));

    return {
        type: 'FETCH_GAME',
        payload: {}
    }
}
