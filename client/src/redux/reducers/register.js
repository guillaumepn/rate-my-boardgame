const reducer = (state = { flashMessage: '', user: {}}, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                flashMessage: action.payload.flashMessage,
                user: action.payload.user,
            };

        default: return state;
    }
};

export default reducer;
