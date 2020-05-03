import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class SerachForm extends React.Component {

    constructor() {
        super();
        this.state = {
        }
        this.inputElement = React.createRef();
    }

    onSearchProducts = event => {
        event.preventDefault();
        console.log(this.props)
        this.props.history.push("/products?title=" + this.inputElement.current.value)
    }

    onSearchProductsPriceDes = () => {
        this.props.history.push("/products?title=" + this.inputElement.current.value + "&sort_by_desc=price")
    }
    onSearchProductsPriceAc = () => {
        this.props.history.push("/products?title=" + this.inputElement.current.value + "&sort_by=price")
    }

    render() {
        return (
            <>
                <Form inline
                    className = "col-lg-6 row form-inline align-self-center search_box"
                    onSubmit={(event) => this.onSearchProducts(event)}
                >
                    <FormControl 
                        type="text" 
                        placeholder="Tìm sản phẩm bạn muốn so sánh.." 
                        className="form-control col-6 col-sm-8 col-md-8 col-lg-8"
                        name="key"
                        ref={this.inputElement}
                    />
                    <Button className="btn col-4 col-sm-2 col-md-2 col-lg-2" variant="outline-primary" type="submit">Tìm kiếm</Button>
                </Form>
            </>  
        )
    }
}

export default withRouter(SerachForm);