export const setUsersList = (users = []) => {

    return {
        type: 'LIST_USERS',
        payload: users
    }
};

export const usersListing = (dispatch) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/users`)
        .then(response => response.json())
        .then(data => {
            dispatch(setUsersList(data))
        })
        .catch(error => console.log(error));

    return {
        type: 'FETCH_USERS',
        payload: {}
    }
};
