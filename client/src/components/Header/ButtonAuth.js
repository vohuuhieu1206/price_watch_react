import React from 'react';
import Nav from 'react-bootstrap/Nav';

const ButtonAuth = props => {

    return (
        <Nav.Link
            data-toggle="modal"
            data-target="#pop_login"
            data-placement="bottom"
            className = "btn_format"
        >
            <i className="fas fa-user-alt icon_format"></i>
            <span 
                data-toggle="tooltip" 
                data-placement="bottom" 
                title="Đăng nhập" 
                className="align-self-center span_format"
                >
                Đăng nhập
            </span>
        </Nav.Link>
    )
}

export default ButtonAuth;