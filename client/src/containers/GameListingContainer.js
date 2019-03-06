import React, {Component} from 'react';

class GameListingContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            games: []
        };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_SERVER_URL}/games`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({games: data})
                console.log(this.state)
            })

    }

    render() {
        return (
            <div>
                <h2>Liste des jeux</h2>
                {
                    this.state.games.length > 0 ?
                        this.state.games.map(game => (
                            <div key={game._id}>{game.title} - {game.year}</div>
                        ))
                        :
                        <p>Aucun jeu</p>
                }
            </div>
        );
    }
}

export default GameListingContainer;
