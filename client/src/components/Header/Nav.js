import React from 'react';

const Nav = props => {

    return (
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
    )
}

export default Nav;