import React from 'react';

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