import React, { Component } from 'react';

// Responsive
import {Container, Row, Col} from "react-bootstrap";
class Banner extends Component {
    render() {
        return (
            <div>
            <section className="wellcome_area clearfix" id="home">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 col-md wellcome_title">
                            <div className="wellcome-heading">
                                <h2>Nghĩ mới và làm khác</h2>
                                <h3>N</h3>
                                <p>Giúp bạn tìm kiếm được giá tốt nhất trên thị trường điện thoại di động</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            </div>
        );
    }
}

export default Banner;