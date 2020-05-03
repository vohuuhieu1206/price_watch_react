import React, { Component } from 'react';
import { connect } from 'react-redux';
import FollowProduct from '../ProductList/ProductsFollow';
import Input from '../UI/Input/Input';

class Account extends Component {
    render() {
        console.log(this.props.auth)

        if (!this.props.auth) {
            return <div>Loading...</div>
        }

        const { nameUser, emailUser } = this.props.auth;
        return (
            <div>
                <section className="account_info section_padding_50 clearfix" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="acount_info_box bg1">
                                    <div className="inner">
                                        <h4>{nameUser}</h4>
                                        <span className="acount_info_box_text">{emailUser}</span>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-users" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="acount_info_box bg2">
                                    <div className="inner">
                                        <h4>{this.props.products && this.props.products.length}</h4>
                                        <span className="acount_info_box_text">Sản phẩm đang theo dõi</span>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="acount_info_box bg3">
                                    <div className="inner">
                                        <h4>Sửa tên của bạn</h4>
                                        <div className = "inner_input">
                                            <Input></Input>
                                            <i class="far fa-check-circle"></i>
                                        </div>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-book" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ***** Account Area End ***** */}
                {/* ***** Followed Product Area Start ***** */}

                <FollowProduct />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { auth: state.auth, products: state.followedProducts }
}

export default connect(
    mapStateToProps
)(Account);