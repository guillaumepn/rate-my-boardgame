import React, {Component} from 'react';
import {connect} from "react-redux";
import {Rating} from "semantic-ui-react";
import {rateGame} from "../redux/actions/game-listing";


class RatingGameContainer extends Component {

    handleRating = (e, { rating }) => {
        this.props.rateGame(this.props.game, rating)
    };

    render() {

        return (
            <Rating onRate={this.handleRating} icon='star' defaultRating={0} maxRating={10} />
        );
    }
}


const mapStateToProps = (state) => {
    return {
        rating: state.gameListing.rating
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        rateGame: (game, rating) => dispatch(rateGame(game, rating, dispatch))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingGameContainer);
