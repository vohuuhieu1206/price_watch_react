import React from 'react';
import { connect } from 'react-redux';

import Input from '../UI/Input/Input';
import { postSignin } from '../../actions/auth';

class SigninForm extends React.Component {
    state = {
        emailUser: "",
        password: "",
    }

    changeHandler = (event, type) => {
        this.setState({ [type]: event.target.value })
    }

    submitHandler = async (e) => {
        e.preventDefault();
        await this.props.postSignin(this.state);
    }


    render() {
        const { emailUser, password } = this.state;
        return (
            <form onSubmit={(e) => e.preventDefault()} >
                <div className="group">
                    <Input
                        type="text"
                        required={true}
                        label="Email"
                        icon="far fa-envelope-open"
                        value={emailUser}
                        onChanged={(event) => this.changeHandler(event, 'emailUser')}
                    />
                </div>
                <div className="group">
                    <Input
                        type="password"
                        required={true}
                        label="Password"
                        icon="fas fa-key"
                        value={password}
                        onChanged={(event) => this.changeHandler(event, 'password')}
                    />
                </div>
                <div className="text-right btn_control">
                    <button
                        className="btn btn-submit" type="submit"
                        onClick={this.submitHandler}
                    >Sign in</button>
                    <button type="button" className="btn" data-dismiss="modal"><i className="far fa-times-circle" /></button>
                </div>
            </form>
        )
    }
}

export default connect(
    null,
    { postSignin }
)(SigninForm);