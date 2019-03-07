import {refreshToken} from "./security";
import * as jwt from "jsonwebtoken";

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

export const addGame = (data, dispatch) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/games`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const user = jwt.decode(localStorage.getItem('token'));

            if (user && data.error && data.details.name === "TokenExpiredError") {
                dispatch(refreshToken({_id: user.id}, dispatch))
            } else {
                dispatch(gameListing(dispatch));
            }
        })
        .catch(error => console.log(error));

    return {
        type: 'ADD_GAME',
        payload: {}
    }
}
