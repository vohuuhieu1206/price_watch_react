import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import Tgdd from '../../img/tgdd.png';
import Hoangha from '../../img/hoangha.png';
import Fpt from '../../img/fptshop.jpg';
import Viettelstore from '../../img/viettelstore.png';
import Cellphones from '../../img/cellphones.png';
import Cholon from '../../img/cholon.png';

class BrandProvider extends Component {

    onBrandProvider = event => {
        event.preventDefault();
        console.log(this.props)
        this.props.history.push(`/products?provider=FPTShop`);
    }

    render() {
        return (
            <section className="danhmucncc">
                <div className="container">
                    <div className="row danhmucnccitem">
                        <div className="col-lg-2 danhmucnccicon">
                            <div className="imagedanhmucncc">
                                <a onClick={this.onBrandProvider}><img src={Tgdd} alt="Logo nhà cung cấp" title="Logo nhà cung cấp"></img></a>
                            </div>
                        </div>
                        <div className="col-lg-2 danhmucnccicon">
                            <div className="imagedanhmucncc">
                                <img src={Hoangha} alt="Logo nhà cung cấp" title="Logo nhà cung cấp"></img>
                            </div>
                        </div>
                        <div className="col-lg-2 danhmucnccicon">
                            <div className="imagedanhmucncc">
                                <img src={Fpt} alt="Logo nhà cung cấp" title="Logo nhà cung cấp"></img>
                            </div>
                        </div>
                        <div className="col-lg-2 danhmucnccicon">
                            <div className="imagedanhmucncc">
                                <img src={Viettelstore} alt="Logo nhà cung cấp" title="Logo nhà cung cấp"></img>
                            </div>
                        </div>
                        <div className="col-lg-2 danhmucnccicon">
                            <div className="imagedanhmucncc">
                                <img src={Cholon} alt="Logo nhà cung cấp" title="Logo nhà cung cấp"></img>
                            </div>
                        </div>
                        <div className="col-lg-2 danhmucnccicon">
                            <div className="imagedanhmucncc">
                                <img src={Cellphones} alt="Logo nhà cung cấp" title="Logo nhà cung cấp"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(BrandProvider);
