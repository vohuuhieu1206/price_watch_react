import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Sort extends Component {

    constructor() {
        super();
        this.state = {
        }
        this.inputElement = React.createRef();
    }

    onSearchProductsPriceDes = () => {
        this.props.history.push("/products?title=" + this.inputElement.current.value + "&sort_by_desc=price")
    }
    onSearchProductsPriceAc = () => {
        this.props.history.push("/products?title=" + this.inputElement.current.value + "&sort_by=price")
    }

    render() {
        return (
            <div className = "row sec_sortby">
                <div>  Sắp xếp giá theo thứ tự:  </div>
                <Button variant="primary" size="sm" onClick={this.props.onSearchProductsPriceAc}>Giá tăng dần</Button>
                <Button variant="primary" size="sm" onClick={this.props.onSearchProductsPriceDes}>Giá giảm dần</Button>
            </div>
        );
    }
}

export default Sort;