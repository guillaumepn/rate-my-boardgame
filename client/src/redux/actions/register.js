export const registered = (data) => {
    return {
        type: 'REGISTERED',
        payload: data
    }
};

export const register = (user, dispatch) => {
    let registerPayload = {};

    fetch(`${process.env.REACT_APP_SERVER_URL}/users/register`, {
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
                data.flashMessage = "Cet identifiant est déjà utilisé";
            }
            else {
                data.flashMessage = "Votre compte a bien été enregistré";
                data.user = response;
            }
            dispatch(registered(data));
        })
        .catch(error => {
            console.log(error);
        });


    return {
        type: 'REGISTER',
        payload: {}
    }
};
