import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthModal from './AuthModal';
import SearchForm from './SearchForm';
import ButtonAuth from './ButtonAuth';
import DropdownInfo from './DropdownInfo';

import { getToken } from '../../auth';
import { getUserInfo, logout } from '../../actions/auth';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Responsive
import {Container, Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';

class Header extends Component {

    handleLogout = () => {
        this.props.logout(getToken());
    }

    componentDidMount() {
        const token = getToken();
        if(token) {
            this.props.getUserInfo(token);
        }
    }

    render() {
        const { auth } = this.props;
        return (
            <div>
                <AuthModal isAuth={!!auth}/>
                    <div className="header_pc">
                        <Navbar fixed="top" bg="primary" variant="light" className = "align-self-center navbar_header">
                            <Navbar.Brand><Link className = "col-sm-2  brand_format" to={"/"}> PriceWatch </Link></Navbar.Brand>
                            <SearchForm />
                            <Navbar.Collapse id="" className = "col-sm-4  align-self-center notification">
                                <Nav>
                                    {
                                        this.props.location.pathname === "/" 
                                        ? 
                                        <Nav.Link href="#about" className="btn_format">
                                            <i className="fas fa-lightbulb icon_format"></i>
                                            <span className="align-self-center span_format">Ý tưởng</span>
                                        </Nav.Link>
                                        :
                                        <Nav.Link href="/#about" className="btn_format">
                                            <i className="fas fa-lightbulb icon_format"></i>
                                            <span className="align-self-center span_format">Ý tưởng</span>
                                        </Nav.Link>
                                    }
                                    {
                                        this.props.location.pathname === "/" 
                                        ? 
                                        <Nav.Link href="#features" className="btn_format">
                                            <i className="fas fa-star icon_format"></i>
                                            <span className="align-self-center span_format">Chức năng</span>
                                        </Nav.Link>
                                        :
                                        <Nav.Link href="/#features" className="btn_format">
                                            <i className="fas fa-star icon_format"></i>
                                            <span className="align-self-center span_format">Chức năng</span>
                                        </Nav.Link>
                                    }
                                    {
                                        this.props.location.pathname === "/" 
                                        ? 
                                        <Nav.Link href="#contact" className="btn_format">
                                            <i className="fas fa-phone-square  icon_format"></i>
                                            <span className="align-self-center span_format">Liên hệ</span>
                                        </Nav.Link>
                                        :
                                        <Nav.Link href="/#contact" className="btn_format">
                                            <i className="fas fa-phone-square  icon_format"></i>
                                            <span className="align-self-center span_format">Liên hệ</span>
                                        </Nav.Link>
                                    }                            
                                    {
                                        auth ? <DropdownInfo handleLogout={this.handleLogout}/> : <ButtonAuth />
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    <div className="header_mb">
                        <Navbar fixed="top" bg="primary" variant="light">
                            <Link className = "brand_format" to={"/"}> PriceWatch </Link>
                            
                            {
                                auth ? <DropdownInfo handleLogout={this.handleLogout}/> : <ButtonAuth />
                            }

                            <Dropdown className="drop_mb">
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <i className="fas fa-bars"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="drop_mb_menu">
                                    {
                                        this.props.location.pathname === "/" 
                                        ? 
                                        <Dropdown.Item href="#about">Ý tưởng</Dropdown.Item>
                                        :
                                        <Dropdown.Item href="/#about">Ý tưởng</Dropdown.Item>
                                    }
                                    <NavDropdown.Divider />
                                    {
                                        this.props.location.pathname === "/" 
                                        ? 
                                        <Dropdown.Item href="#features">Chức năng</Dropdown.Item>
                                        :
                                        <Dropdown.Item href="/#features">Chức năng</Dropdown.Item>
                                    }
                                    <NavDropdown.Divider />
                                    {
                                        this.props.location.pathname === "/" 
                                        ? 
                                        <Dropdown.Item href="#contact">Liên hệ</Dropdown.Item>
                                        :
                                        <Dropdown.Item href="/#contact">Liên hệ</Dropdown.Item>
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </Navbar>
                    </div>
            </div>
            );
    }
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(
    mapStateToProps,
    { getUserInfo, logout }
)(withRouter(Header));