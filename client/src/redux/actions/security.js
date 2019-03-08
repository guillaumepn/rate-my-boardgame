export const logUser = (token) => {
    return {
        type: 'LOGGED_USER',
        payload: {
            token
        }
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
        .then(data => dispatch(logUser(data.token)))
        .catch(error => console.log(error));

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
