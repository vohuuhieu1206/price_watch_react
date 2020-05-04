import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getFollowProducts } from '../../actions/products';
import SingleProductList from './SingleProductList';

class ProductList extends Component {

    componentDidMount() {
        let rawQuery = this.props.location.search || null;
        let queryObj = {
            page: 0,
            title: ""
        }

        if(rawQuery) {
            let patt = /[^?].*/;                        // check if string start with `?` then remove `?` from query
            let queryArr = rawQuery.split("&");         // ?page=2&title=nokia => [?page=2, title=nokia]
            queryArr.forEach(queryStr => {
                let q = queryStr.split("=");
                queryObj[q[0].match(patt)[0]] = q[1];   // q[0]: ?page/title   ---   q[1]: 2/nokia
            })
        }

        this.props.getFollowProducts(queryObj);
    }

    renderProduct = (product) => {
        return (
            <SingleProductList key={product.identifier} product={product} />
        )
    }

    render() {
        const { products } = this.props;
        console.log(products)
        return products.length === 0 
            ? 
                <div>
                    <section className="special-area section_padding_50 clearfix">
                        <div className="container">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-12 text-center align-self-center align-items-center">
                            <h4>Bạn chưa theo dõi sản phẩm nào. Hãy theo dõi thêm các sản phẩm!</h4>
                            </div>
                        </div>
                    </section>
                </div>
            : 
            (
                <div>
                    <section className="special-area section_padding_50 clearfix" id="about">
                        <div className="container">
                            <div className="row">
                                {
                                    products.map(pro => this.renderProduct(pro))
                                }
                            </div>
                        </div>
                        {/* <Pagination pagination={products} /> */}
                    </section>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return { products: state.followedProducts };
}

export default connect(
    mapStateToProps,
    { getFollowProducts }
)(withRouter(ProductList));
