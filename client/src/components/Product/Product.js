import React, { Component } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    getSingleProduct,
    followProduct,
    getFollowProducts,
    unFollowProduct
} from '../../actions/products';
import PriceChart from '../PriceChart/PriceChart';
import ReviewsList from './ReviewsList';
import ProductDes from './ProductDes';

class Product extends Component {

    componentDidMount() {
        const { pid } = this.props.match.params;
        this.props.getSingleProduct(pid);
        this.props.getFollowProducts();
    }

    followProduct = pid => {
        this.props.followProduct(pid);
    }

    unFollowProduct = pid => {
        this.props.unFollowProduct(pid)
    }

    render() {
        const { product, followedProducts } = this.props;
        console.log(followedProducts)
        let isFollowed = false;
        if(followedProducts.length > 0 && product) {
            followedProducts.forEach(prod => {
                if(product.detail.data.identifier === prod.identifier || product.detail.data.identifier === prod.product_id) {
                    isFollowed = true
                }
            })
        }

        return !product ? 
                <div>
                    <section className="single_product clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                <SkeletonTheme color="#cecece" highlightColor="#bababa">
                                <p><Skeleton height={550} width={550}/></p>
                                </SkeletonTheme>
                                </div>
                                <div className="col-lg-6">
                                <SkeletonTheme color="#cecece" highlightColor="#bababa">
                                <p><Skeleton height={550} width={550}/></p>
                                </SkeletonTheme>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="special-area section_padding_50 clearfix">
                        <div className="container">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-12 text-center align-self-center align-items-center">
                            <SkeletonTheme color="#cecece" highlightColor="#bababa">
                            <p><Skeleton height={50}/></p>
                            </SkeletonTheme>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-12 text-center align-self-center align-items-center">
                            <SkeletonTheme color="#cecece" highlightColor="#bababa">
                            <p><Skeleton height={150} /></p>
                            </SkeletonTheme>
                            </div>
                            <div className="line" />
                            <div className="col-12 col-sm-12 col-md-6 col-lg-12 text-center align-self-center align-items-center">
                            <SkeletonTheme color="#cecece" highlightColor="#bababa">
                            <p><Skeleton height={150} /></p>
                            </SkeletonTheme>
                            </div>
                            <div className="line" />
                            <div className="col-12 col-sm-12 col-md-6 col-lg-12 text-center align-self-center align-items-center">
                            <SkeletonTheme color="#cecece" highlightColor="#bababa">
                            <p><Skeleton height={150} /></p>
                            </SkeletonTheme>
                            </div>
                            <div className="line" />
                            <div className="col-12 col-sm-12 col-md-6 col-lg-12 text-center align-self-center align-items-center">
                            <SkeletonTheme color="#cecece" highlightColor="#bababa">
                            <p><Skeleton height={150} /></p>
                            </SkeletonTheme>
                            </div>
                            <div className="line" />
                            <div className="col-12 col-sm-12 col-md-6 col-lg-12 text-center align-self-center align-items-center">
                            <SkeletonTheme color="#cecece" highlightColor="#bababa">
                            <p><Skeleton height={150} /></p>
                            </SkeletonTheme>
                            </div>
                            <div className="line" />
                            <div className="col-12 col-sm-12 col-md-6 col-lg-12 text-center align-self-center align-items-center">
                            <SkeletonTheme color="#cecece" highlightColor="#bababa">
                            <p><Skeleton height={150} /></p>
                            </SkeletonTheme>
                            </div>
                        </div>
                    </section>
                </div>
            : (
                <div>
                    <section className="single_product clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="image_selected col-lg-6">
                                    <img src={product.detail.data.image} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <ProductDes
                                        isFollowed={isFollowed}
                                        product={product}
                                        followProduct={this.followProduct}
                                        unFollowProduct={this.unFollowProduct}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="spline_chart col-lg-12">
                        <PriceChart className="chart_price" productDetail={product} />
                    </section>
                    <section className="spline_chart_section clearfix">
                    </section>
                    
                    <section className="evaluate section_padding_100 clearfix">
                        <div className="container" id="userrating">
                            <div className="header_eva">
                                <p>ĐÁNH GIÁ SẢN PHẨM</p>
                            </div>
                            <div className="row comment_analytics">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 text-center align-self-center">
                                    <p>Đánh giá trung bình</p>
                                    <h2 className="text-danger font-weight-bold">4/5</h2>
                                    <div className="voting">
                                        <div className="star">
                                            <span className="fa fa-star star-checked" />
                                            <span className="fa fa-star star-checked" />
                                            <span className="fa fa-star star-checked" />
                                            <span className="fa fa-star star-checked" />
                                            <span className="fa fa-star" />
                                        </div>
                                    </div>
                                    <p>(Có 25 nhận xét)</p>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-8 text-center align-self-center vote_progress">
                                    {/* Five star */}
                                    <div className="row">
                                        <div className="col-lg-2 col-2 col-sm-2 col-md-2 text-right">5 <i className="fas fa-star" /></div>
                                        <div className="col-lg-8 col-8 col-sm-8 col-md-8">
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{ width: '86%' }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 col-sm-2 col-md-2 text-left">86%</div>
                                    </div>
                                    {/* Four star */}
                                    <div className="row">
                                        <div className="col-lg-2 col-2 col-sm-2 col-md-2 text-right">4 <i className="fas fa-star" /></div>
                                        <div className="col-lg-8 col-8 col-sm-8 col-md-8">
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped progress-bar-animated bgcolor_green" role="progressbar" aria-valuenow={9} aria-valuemin={0} aria-valuemax={100} style={{ width: '9%' }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 col-sm-2 col-md-2 col-2 col-sm-2 col-md-2 text-left">9%</div>
                                    </div>
                                    {/* Three star */}
                                    <div className="row">
                                        <div className="col-lg-2 col-2 col-sm-2 col-md-2 col-2 col-sm-2 col-md-2 text-right">3 <i className="fas fa-star" /></div>
                                        <div className="col-lg-8 col-8 col-sm-8 col-md-8">
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow={3} aria-valuemin={0} aria-valuemax={100} style={{ width: '3%' }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 col-sm-2 col-md-2 col-2 col-sm-2 col-md-2 text-left">3%</div>
                                    </div>
                                    {/* Two star */}
                                    <div className="row">
                                        <div className="col-lg-2 col-2 col-sm-2 col-md-2 col-2 col-sm-2 col-md-2 text-right">2 <i className="fas fa-star" /></div>
                                        <div className="col-lg-8 col-8 col-sm-8 col-md-8">
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{ width: '0%' }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 col-sm-2 col-md-2 col-2 col-sm-2 col-md-2 text-left">0%</div>
                                    </div>
                                    {/* One star */}
                                    <div className="row">
                                        <div className="col-lg-2 col-2 col-sm-2 col-md-2 col-2 col-sm-2 col-md-2 text-right">1 <i className="fas fa-star" /></div>
                                        <div className="col-lg-8 col-8 col-sm-8 col-md-8">
                                            <div className="progress ">
                                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow={2} aria-valuemin={0} aria-valuemax={100} style={{ width: '2%' }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 col-sm-2 col-md-2 col-2 col-sm-2 col-md-2 text-left">2%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="line" />
                            {/* Nội dung bình luận */}
                            <ReviewsList />
                        </div>
                    </section>
                </div>
            );
    }
}

const mapStateToProps = state => {
    return { product: state.singleProduct, followedProducts: state.followedProducts }
}

export default connect(
    mapStateToProps,
    { getSingleProduct, followProduct, getFollowProducts, unFollowProduct }
)(
    withRouter(Product)
);