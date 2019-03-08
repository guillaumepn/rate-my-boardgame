import {registered} from "./register";

export const logUser = (data) => {
    return {
        type: 'LOGGED_USER',
        payload: data
    }
};

export const login = (user, dispatch) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/login_check`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(response => {
            let data = {};

            if (response.error) {
                if (response.type === 'wrong-combinaison')
                    data.flashMessage = "La combinaison identifiant/mot de passe est invalide";
                else if (response.type === 'empty-fields')
                    data.flashMessage = "Vous devez entrer un identifiant et mot de passe";
            } else {
                data.flashMessage = "Vous êtes bien déconnecté";
                data.user = response;
                data.token = response.token;
            }
            dispatch(logUser(data));
        })
        .catch(error => {
            console.log(error);
        });

    return {
        type: 'IS_LOGGING',
        payload: {}
    }
};

export const refreshToken = (user, dispatch) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/login_check/refresh`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => dispatch(logUser(data.token)))
        .catch(error => console.log(error));

    return {
        type: 'IS_LOGGING',
        payload: {}
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        payload: {}
    }
};
