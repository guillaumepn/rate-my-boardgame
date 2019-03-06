export const register = (user) => {
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
            console.log(response);
            if (response.error) {
                registerPayload.flashMessage = "Cet identifiant est déjà utilisé";
            }
            else {
                registerPayload.flashMessage = "Votre compte a bien été enregistré";
                registerPayload.user = response;
            }
        })
        .catch(error => {
            console.log(error);
        });


    return {
        type: 'REGISTER',
        payload: registerPayload
    }
};
