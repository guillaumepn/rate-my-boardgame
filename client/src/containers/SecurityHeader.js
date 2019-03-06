import React, {Component} from 'react';
import {connect} from "react-redux";

class SecurityHeader extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.token}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.security.loggedUser
    }
};

export default connect(mapStateToProps)(SecurityHeader);
