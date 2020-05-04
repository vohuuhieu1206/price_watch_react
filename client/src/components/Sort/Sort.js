import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

class Sort extends Component {

    constructor() {
        super();
        this.queryName = ''
    }

    componentDidMount() {
        this.queryName = this.props.location.search;
    }

    onSearchProductsPriceDes = () => {
        this.props.history.push("/products" + this.queryName + "&sort_by_desc=price");
    }
    onSearchProductsPriceAc = () => {
        this.props.history.push("/products" + this.queryName + "&sort_by=price");
    }

    render() {
        return (
            <div className = "row sec_sortby">
                <div>  Sắp xếp giá theo thứ tự:  </div>
                <Button variant="primary" size="sm" onClick={this.onSearchProductsPriceAc}>Giá tăng dần</Button>
                <Button variant="primary" size="sm" onClick={this.onSearchProductsPriceDes}>Giá giảm dần</Button>
            </div>
        );
    }
}

export default withRouter(Sort);