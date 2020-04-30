import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import ProductList from '../ProductList/ProductList';
import Product from '../Product/Product';
import ProductFollow from '../ProductList/ProductsFollow';
import Account from '../Account/Account';
import VerifyEmail from '../Account/VerifyEmail';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import PrivateRoute from './PrivateRoute';
import Banner from '../Intro/Banner';


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Banner />
                    <Switch>
                            <Route exact path="/" component={Intro} />
                            <Route exact path="/me/verify/:token" component={VerifyEmail} />
                            <PrivateRoute exact path="/me" component={Account} />
                            <Route exact path="/products" component={ProductList} />
                            <Route exact path="/products/:pid" component={Product} />
                            <PrivateRoute exact path="/me/products" component={ProductFollow} />
                    </Switch>
                    <Footer />
                    <ScrollToTop />
                </Router>
            </div>
        );
    }
}

export default App;
