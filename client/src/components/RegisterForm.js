import React, {Component} from 'react';

class RegisterForm extends Component {
    render() {
        return (
            <div>
                <h2>Register</h2>
                <form onSubmit={this.props.onSubmit}>
                    <div>
                        <label htmlFor="username__register">Username</label>
                        <input type="text" id="username__register"
                               onChange={(event) => this.props.onChange(event.currentTarget.value, 'username')}/>
                    </div>
                    <div>
                        <label htmlFor="password__register">Password</label>
                        <input type="password" id="password__register"
                               onChange={(event) => this.props.onChange(event.currentTarget.value, 'password')}/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default RegisterForm;
