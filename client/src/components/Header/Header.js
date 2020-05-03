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
                    <Navbar fixed="top" bg="primary" variant="light" className = "align-self-center navbar_header">
                    <Navbar.Brand><Link className = "brand_format col-lg-2" to={"/"}> PriceWatch </Link></Navbar.Brand>
                    <SearchForm />
                    <Navbar.Collapse id="" className = "col-lg-4 align-self-center notification">
                        <Nav>
                            <Nav.Link href="#about" className="btn_format">
                                <i className="fas fa-lightbulb icon_format"></i>
                                <span className="align-self-center span_format">Ý tưởng</span>
                            </Nav.Link>

                            <Nav.Link href="#features" className="btn_format">
                                <i className="fas fa-star icon_format"></i>
                                <span className="align-self-center span_format">Chức năng</span>
                            </Nav.Link>

                            <Nav.Link href="#contact" className="btn_format">
                                <i className="fas fa-star icon_format"></i>
                                <span className="align-self-center span_format">Liên hệ</span>
                            </Nav.Link>

                            {
                                auth ? <DropdownInfo handleLogout={this.handleLogout}/> : <ButtonAuth />
                            }
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
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