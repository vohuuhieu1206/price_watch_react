import React from 'react';
import Button from 'react-bootstrap/Button';

const ButtonSignout = props => {

    return (
        <div
            className=""
            onClick={props.handleLogout}
        >
            Đăng xuất
        </div>
    )
}

export default ButtonSignout;