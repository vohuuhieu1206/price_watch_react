import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonSignout from './ButtonSignout';
import NavDropdown from 'react-bootstrap/NavDropdown';

const DropdownInfo = props => {

    return (
            <Dropdown className="drop_mb_info">
                <Dropdown.Toggle variant="" id="dropdown">
                    <div className = "btn_format">                    
                        <i className="fas fa-user-alt icon_format"></i>
                        <span className="align-self-center span_format">User Name</span>
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="drop_mb_info_menu">
                    <Dropdown.Item>
                        <Link to="/me">Thông tin</Link>
                    </Dropdown.Item>
                    <NavDropdown.Divider />
                    <Dropdown.Item> <ButtonSignout handleLogout={props.handleLogout} /> </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    )
}

export default DropdownInfo;