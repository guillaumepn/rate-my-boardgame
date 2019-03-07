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
                        <textarea id="description" onChange={(event) => this.props.onChange(event.currentTarget.value, 'description')} rows="5" cols="33">
                        </textarea>
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
                        <label htmlFor="year">Année de création</label>
                        <input type="number" id="year" onChange={(event) => this.props.onChange(event.currentTarget.value, 'year')}/>
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
                        <input placeholder="à partir de 12 ans" type="text" id="ageRange" onChange={(event) => this.props.onChange(event.currentTarget.value, 'ageRange')}/>
                    </div>
                    <div>
                        <label htmlFor="estimatedDuration">Temps de jeu moyen (min)</label>
                        <input type="number" id="estimatedDuration" onChange={(event) => this.props.onChange(event.currentTarget.value, 'estimatedDuration')}/>
                    </div>
                    <div>
                        <label htmlFor="theme">Thèmes (séparer les différents éléments par des virgules)</label>
                        <input type="text" id="theme" onChange={(event) => this.props.onChange(event.currentTarget.value, 'theme')}/>
                    </div>
                    <div>
                        <label htmlFor="mechanics">Mécaniques (séparer les différents éléments par des virgules)</label>
                        <input type="text" id="mechanics" onChange={(event) => this.props.onChange(event.currentTarget.value, 'mechanics')}/>
                    </div>
                    <div>
                        <label htmlFor="website">Website</label>
                        <input placeholder="https://example.com" type="url" id="website" onChange={(event) => this.props.onChange(event.currentTarget.value, 'website')}/>
                    </div>
                    <div>
                        <label htmlFor="image">Url de l'image</label>
                        <input placeholder="https://example.com" type="url" id="image" onChange={(event) => this.props.onChange(event.currentTarget.value, 'image')}/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;

/*
    creator
    theme: [String],
    mechanics: [String],
 */