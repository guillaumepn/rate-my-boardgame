const reducer = (state = {loggedUser: ''}, action) => {
    switch (action.type) {
        case 'LOGGED_USER':
            if (action.payload.token) {
                localStorage.setItem('token', action.payload.token);
            }

            return {
                ...state,
                loggedUser: action.payload.token
            };

        case 'LOGOUT':
            localStorage.removeItem('token');

            return {
                ...state,
                loggedUser: ''
            };

        default:
            return state;
    }
}

export default reducer;
