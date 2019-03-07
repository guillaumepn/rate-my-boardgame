import React, {Component} from 'react';

class LoginForm extends Component {
    render() {
        return (
            <div>
                <h2>Ajouter un jeu</h2>
                <form onSubmit={this.props.onSubmit}>
                    <div>
                        <label htmlFor="title">Titre</label>
                        <input type="text" id="title" onChange={(event) => this.props.onChange(event.currentTarget.value, 'title')}/>
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" onChange={(event) => this.props.onChange(event.currentTarget.value, 'description')}/>
                    </div>

                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;


/*   <div>
                    <label htmlFor="creator">Créateur</label>
                    <input type="text" id="creator" onChange={(event) => this.props.onChange(event.currentTarget.value, 'creator')}/>
                </div>
                <div>
                    <label htmlFor="illustrator">Illustrateur</label>
                    <input type="text" id="illustrator" onChange={(event) => this.props.onChange(event.currentTarget.value, 'illustrator')}/>
                </div>
                <div>
                    <label htmlFor="editor">Editeur</label>
                    <input type="text" id="editor" onChange={(event) => this.props.onChange(event.currentTarget.value, 'editor')}/>
                </div>
                <div>
                    <label htmlFor="publisher">Distributeur</label>
                    <input type="text" id="publisher" onChange={(event) => this.props.onChange(event.currentTarget.value, 'publisher')}/>
                </div>
                <div>
                    <label htmlFor="minPlayers">Joueurs minimum</label>
                    <input type="number" id="minPlayers" onChange={(event) => this.props.onChange(event.currentTarget.value, 'minPlayers')}/>
                </div>
                <div>
                    <label htmlFor="maxPlayers">Joueurs maximum</label>
                    <input type="number" id="maxPlayers" onChange={(event) => this.props.onChange(event.currentTarget.value, 'maxPlayers')}/>
                </div>
                <div>
                    <label htmlFor="ageRange">Age</label>
                    <input type="text" id="ageRange" onChange={(event) => this.props.onChange(event.currentTarget.value, 'ageRange')}/>
                </div>*/
/*

    year: {type: Number, min: 1800, message: 'Doit être une valeur numérique supérieure à 1800'},
    theme: [String],
    estimatedDuration: {type: Number, min: 0, max: 2000},
    mechanics: [String],
    website: {type: String, minlength: 5, maxlength: 300},
    image: {type: String, minlength: 5, maxlength: 300},
 */