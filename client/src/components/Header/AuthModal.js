import React from 'react';

import SigninForm from './SigninForm';
import SignupForm from './SignupForm';

class AuthModal extends React.Component {
    render() {
        return (
            <div className="modal fade login_modal" id="pop_login" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-c-tabs" >
                            {
                                !this.props.isAuth ? (
                                    <>
                                        <ul className="nav nav-tabs row" role="tablist">
                                            <li className="nav-item col-lg-6 text-center align-self-center">
                                                <a className="nav-link active" data-toggle="tab" href="#panel_login" role="tab"><i className="fas fa-user mr-1" />
                                    Login</a>
                                            </li>
                                            <li className="nav-item col-lg-6 text-center align-self-center">
                                                <a className="nav-link" data-toggle="tab" href="#panel_reg" role="tab"><i className="fas fa-user-plus mr-1" />
                                    Register</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane fade in show active" id="panel_login" role="tabpanel">
                                                <div className="modal-body">
                                                    <SigninForm />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="panel_reg" role="tabpanel">
                                                <div className="modal-body">
                                                    <SignupForm />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : <p>Login success</p>
                            }
                        </div >
                    </div>
                </div>
            </div>

        )
    }
}

export default AuthModal;