import React, {Component} from 'react';
import {connect} from "react-redux";
import {usersListing} from "../redux/actions/users";
import {List} from "semantic-ui-react";
import {Link} from "react-router-dom";

class UsersListContainer extends Component {
    componentDidMount() {
        this.props.usersListing();
    }

    render() {
        const users = this.props.users;

        return (
            <div>
                <h2>Liste des utilisateurs</h2>
                <List
                    selection
                    verticalAlign="middle"
                    style={{
                        margin: '1em 0'
                    }}
                >
                    {
                        users.length > 0 ?
                            users.map(user => (
                                <List.Item
                                    key={user._id}
                                    as={Link}
                                    to={`/user/${user._id}`}
                                >
                                    <List.Content>
                                        <List.Header>
                                            {user.username}
                                        </List.Header>
                                        <List.Description>

                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            ))
                            :
                            <div>Aucun utilisateur trouvé</div>
                    }
                </List>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userListing.users,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        usersListing: () => dispatch(usersListing(dispatch))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
