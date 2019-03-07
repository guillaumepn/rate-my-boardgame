export const registered = (data) => {
    return {
        type: 'REGISTERED',
        payload: data
    }
};

export const register = (user, dispatch) => {
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
                if (response.type === 'already-exists')
                    data.flashMessage = "Cet identifiant est déjà pris";
                else if (response.type === 'empty-fields')
                    data.flashMessage = "Vous devez entrer un identifiant et mot de passe";
            } else {
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
