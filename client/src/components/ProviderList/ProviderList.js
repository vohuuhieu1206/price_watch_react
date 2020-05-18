import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Tgdd from '../../img/tgdd.png';
import Hoangha from '../../img/hoangha.png';
import Fpt from '../../img/fptshop.jpg';
import ViettelStore from '../../img/viettelstore.png';
import Cellphones from '../../img/cellphones.png';
import Cholon from '../../img/cholon.png';

class ProviderList extends Component {

    onBrandProvider = (provider_name) => {
        console.log(this.props);
        this.props.history.push("/products?provider=" + provider_name);
    }

    render() {
        return (
            <section className="danhmucncc">
                <div className="container">
                    <div className="row danhmucnccitem">
                        <div className="col-lg-2 danhmucnccicon">
                            <div className="imagedanhmucncc">
                                <a onClick={ () => this.onBrandProvider("Thegioididong")}><img src={Tgdd} alt="Logo nhà cung cấp" title="Logo nhà cung cấp"></img></a>
                            </div>
                        </div>
                        <div className="col-lg-2 danhmucnccicon">
                            <div className="imagedanhmucncc">
                                <a onClick={ () => this.onBrandProvider("HoangHaMobile")}><img src={Hoangha} alt="Logo nhà cung cấp" title="Logo nhà cung cấp"></img></a>
                            </div>
                        </div>
                        <div className="col-lg-2 danhmucnccicon">
                            <div className="imagedanhmucncc">
                                <a onClick={ () => this.onBrandProvider("FPTShop")}><img src={Fpt} alt="Logo nhà cung cấp" title="Logo nhà cung cấp"></img></a>
                            </div>
                        </div>
                        <div className="col-lg-2 danhmucnccicon">
                            <div className="imagedanhmucncc">
                                <a onClick={ () => this.onBrandProvider("ViettelStore")}><img src={ViettelStore} alt="Logo nhà cung cấp" title="Logo nhà cung cấp"></img></a>
                            </div>
                        </div>
                        <div className="col-lg-2 danhmucnccicon">
                            <div className="imagedanhmucncc">
                                <a onClick={ () => this.onBrandProvider("DienMayChoLon")}><img src={Cholon} alt="Logo nhà cung cấp" title="Logo nhà cung cấp"></img></a>
                            </div>
                        </div>
                        <div className="col-lg-2 danhmucnccicon">
                            <div className="imagedanhmucncc">
                                <a onClick={ () => this.onBrandProvider("CellphoneS")}><img src={Cellphones} alt="Logo nhà cung cấp" title="Logo nhà cung cấp"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(ProviderList);
