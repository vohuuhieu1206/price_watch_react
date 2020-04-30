import React from 'react';
import { connect } from 'react-redux';

import Input from '../UI/Input/Input';
import { postSignup } from '../../actions/auth';

class SignupForm extends React.Component {

    state = {
        nameUser: "",
        emailUser: "",
        password: "",
        password_confirmation: ""
    }

    changeHandler = (event, type) => {
        this.setState({ [type]: event.target.value })
    }

    submitHandler = async (e) => {
        e.preventDefault();
        let res = await this.props.postSignup(this.state);
        
        if(res) {
            // handle after signup success
        }
    }

    render() {
        let { nameUser, emailUser, password, password_confirmation } = this.state
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="group">
                    <Input
                        type="text"
                        required={true}
                        label="Họ và tên"
                        icon="far fa-envelope-open"
                        value={nameUser}
                        onChanged={(event) => this.changeHandler(event, 'nameUser')}
                    />
                </div>
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
                <div className="group">
                    <Input
                        type="password"
                        required={true}
                        label="Confirm password"
                        icon="fas fa-key"
                        value={password_confirmation}
                        onChanged={(event) => this.changeHandler(event, 'password_confirmation')}
                    />
                </div>

                <div className="text-right btn_control">
                    <button
                        className="btn btn-submit" type="submit"
                        onClick={this.submitHandler}
                    >Sign up</button>
                    <button type="button" className="btn" data-dismiss="modal"><i className="far fa-times-circle" /></button>
                </div>
            </form>
        )
    }
}

export default connect(
    null,
    { postSignup }
)(SignupForm);