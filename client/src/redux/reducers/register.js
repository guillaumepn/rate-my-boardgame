const reducer = (state = { flashMessage: '', user: {}}, action) => {
    switch (action.type) {
        case 'REGISTERED':
            return {
                ...state,
                flashMessage: action.payload.flashMessage,
                user: action.payload.user,
            };

        default: return state;
    }
};

export default reducer;
