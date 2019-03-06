import React, {Component} from 'react';

class LoginForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={(event) => this.props.onChange(event.currentTarget.value, 'username')}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(event) => this.props.onChange(event.currentTarget.value, 'password')}/>
                </div>
                <button>Submit</button>
            </form>
        );
    }
}

export default LoginForm;
