import React from 'react';
import { Link } from 'react-router-dom';

import ImgBrand from '../../img/tgdd.jpg';

const SingleProductList = ({product: { image, title, link, identifier, crawlUpdate, provider, price  }}) => {
    
    return (
        <div key={identifier}>
            <div className="row col-12 col-sm-12 col-md-6 col-lg-12 text-center align-self-center align-items-center">
                <div className="col-lg-2"><img className="img_item" src={image} alt={title} /></div>
                <div className="col-lg-4">
                    <p className="name_item">
                        <Link to={"/products/" + identifier}>{title}</Link>
                    </p>
                    <p className="seller-by">{provider}</p>
                </div>
                <div className="col-lg-2">
                    <p className="price">{price} VNĐ</p>
                </div>
                <div className="col-lg-1"><img className="img_logo" src={ImgBrand} alt="st" /></div>
                <div className="col-lg-3">
                    <button
                        type="button" className="button product_button"
                        onClick={() => window.open(link, "__blank")}
                    >
                        Đến cửa hàng
                    </button>
                    <p className="seller-by">Cập nhật {new Date(crawlUpdate).toLocaleString()}</p>
                </div>
            </div>
            <div className="line" />
        </div>
    )
}

export default SingleProductList;