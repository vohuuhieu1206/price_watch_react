import React, { Component } from 'react';

import Apple from '../../img/apple.png';
import Xiaomi from '../../img/xiaomi.png';
import Samsung from '../../img/samsung.png';
import Nokia from '../../img/nokia.png';
import Vsmart from '../../img/vsmart.png';
import Oppo from '../../img/oppo.png';

class BrandProduct extends Component {
    render() {
        return (
            <section>
                <div className="container danhmucnoibat">
                    <div className="row">
                        <div className="col-lg-2 danhmucicon">
                            <div className="imagedanhmuc">
                                <img src={Vsmart} width="160" height="130"  alt="Logo thương hiệu" title="Logo thương hiệu"></img>
                            </div>
                        </div>
                        <div className="col-lg-2 danhmucicon">
                            <div className="imagedanhmuc">
                                <img src={Samsung} width="160" height="130"  alt="Logo thương hiệu" title="Logo thương hiệu"></img>
                            </div>
                        </div>
                        <div className="col-lg-2 danhmucicon">
                            <div className="imagedanhmuc">
                                <img src={Xiaomi} width="160" height="130"  alt="Logo thương hiệu" title="Logo thương hiệu"></img>
                            </div>
                        </div>
                        <div className="col-lg-2 danhmucicon">
                            <div className="imagedanhmuc">
                                <img src={Apple} width="160" height="130"  alt="Logo thương hiệu" title="Logo thương hiệu"></img>
                            </div>
                        </div>
                        <div className="col-lg-2 danhmucicon">
                            <div className="imagedanhmuc">
                                <img src={Nokia} width="160" height="130"  alt="Logo thương hiệu" title="Logo thương hiệu"></img>
                            </div>
                        </div>
                        <div className="col-lg-2 danhmucicon">
                            <div className="imagedanhmuc">
                                <img src={Oppo} width="160" height="130"  alt="Logo thương hiệu" title="Logo thương hiệu"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BrandProduct;