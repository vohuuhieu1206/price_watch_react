import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getProducts } from '../../actions/products';
import SingleProductList from './SingleProductList';
import Pagination from '../Pagination/Pagination';
import Sort from '../Sort/Sort';
import BrandProvider from '../BrandProvider/BrandProvider';


class ProductList extends Component {
    state = {
        queryObj: {
            page: 0,
            title: ""
        }
    }

    async componentDidMount() {
        await this.getQuery();
        this.props.getProducts(this.state.queryObj);
    }

    getQuery = async () => {
        let rawQuery = this.props.location.search || null;
        let queryObj = {
            page: 0,
            filter: "",
            sort_by: "",
            sort_by_desc: ""
        }

        if (rawQuery) {
            let patt = /[^?].*/;                        // check if string start with `?` then remove `?` from query
            let queryArr = rawQuery.split("&");         // ?page=2&filter=nokia => [?page=2, filter=nokia]
            queryArr.forEach(queryStr => {
                let q = queryStr.split("=");
                queryObj[q[0].match(patt)[0]] = q[1];   // q[0]: ?page/filter   ---   q[1]: 2/nokia
            })
        }

        console.log(queryObj)
        this.setState(() => {
            return { queryObj: queryObj }
        });
    }

    async UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.location.search !== this.props.location.search) {
            let rawQuery = nextProps.location.search || null;
            console.log(rawQuery)
            let queryObj = {
                page: 0,
                title: "",
                sort_by: "",
                sort_by_desc: ""
            }

            if (rawQuery) {
                let patt = /[^?].*/;                        // check if string start with `?` then remove `?` from query
                let queryArr = rawQuery.split("&");         // ?page=2&title=nokia => [?page=2, title=nokia]
                queryArr.forEach(queryStr => {
                    let q = queryStr.split("=");
                    queryObj[q[0].match(patt)[0]] = q[1];   // q[0]: ?page/title   ---   q[1]: 2/nokia
                })
            }

            this.setState(() => {
                return { queryObj: queryObj }
            });

            this.props.getProducts(queryObj);
        }
    }

    renderProduct = (product) => {
        return (
            <SingleProductList key={product.identifier} product={product} />
        )
    }

    render() {
        const { products } = this.props;
        console.log(products);
        
        if(!products.data) {
            return (
                <div>
                    <section className="special-area section_padding_50 clearfix">
                        <div className="container">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-12 text-center align-self-center align-items-center">
                            <SkeletonTheme color="#cecece" highlightColor="#bababa">
                            <p><Skeleton height={50}/></p>
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
                            <div className="line" />
                            <div className="col-12 col-sm-12 col-md-6 col-lg-12 text-center align-self-center align-items-center">
                            <SkeletonTheme color="#cecece" highlightColor="#bababa">
                            <p><Skeleton height={150} /></p>
                            </SkeletonTheme>
                            </div>
                            <div className="line" />
                            <div className="col-12 col-sm-12 col-md-6 col-lg-12 text-center align-self-center align-items-center">
                            <SkeletonTheme color="#cecece" highlightColor="#bababa">
                            <p><Skeleton height={50}/></p>
                            </SkeletonTheme>
                            </div>
                        </div>
                    </section>
                </div>
            )
        } else if(!products.data.length) {
            return <div>Khong co san phan nao</div>
        } else {
            return (
                <div>
                    <section className="special-area section_padding_50 clearfix" id="about">
                        <div className="container">
                            <div className="row">
                                <Sort />
                                <BrandProvider />
                                <div className="line" />
                                {
                                    products.data.map(pro => this.renderProduct(pro))
                                }
                            </div>
                        </div>
                        <Pagination pagination={products.meta.pagination} />
                    </section>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return { products: state.products };
}

export default connect(
    mapStateToProps,
    { getProducts }
)(ProductList);
