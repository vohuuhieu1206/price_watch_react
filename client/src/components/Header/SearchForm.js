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
                    className = "col-sm-6 row form-inline align-self-center search_box"
                    onSubmit={(event) => this.onSearchProducts(event)}
                >
                    <FormControl 
                        type="text" 
                        placeholder="Tìm sản phẩm bạn muốn so sánh.." 
                        className="col-md-10 form-control"
                        name="key"
                        ref={this.inputElement}
                    />
                    <Button className="col-md-2 btn" variant="outline-primary" type="submit">Tìm kiếm</Button>
                </Form>
            </>  
        )
    }
}

export default withRouter(SerachForm);