import React from 'react';

import moment from 'moment';
import 'moment/locale/vi';

import { Link } from 'react-router-dom';

const SingleProductList = ({product: { image, title, link, identifier, crawlUpdate, provider, linkLogo, strPrice  }}) => {
    
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
                    <p className="price">{strPrice} VNĐ</p>
                </div>
                <div className="col-lg-1"><img className="img_logo" src={linkLogo} alt="st" /></div>
                <div className="col-lg-3 openlink">
                    <button
                        type="button" className="button product_button"
                        onClick={() => window.open(link, "__blank")}
                    >
                        Đến cửa hàng
                    </button>
                    <div className="moment_crawl">
                        {/* <p className="seller-by">{new Date(crawlUpdate).toLocaleString()}</p> */}
                        <p className="seller-by">Cập nhật {moment(crawlUpdate).fromNow()}</p>
                    </div>
                </div>
            </div>
            <div className="line" />
        </div>
    )
}

export default SingleProductList;