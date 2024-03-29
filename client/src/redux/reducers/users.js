const reducer = (state = {users: []}, action) => {
    switch (action.type) {
        case 'LIST_USERS':
            return {
                ...state,
                users: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
