import React from 'react';

const ProductDetail = props => {
    const { link, identifier, title, linkLogo } = props.product.detail.data;
    const { specification } = props.product;
    const { price } = props.product.realprice.data;
    return (
        <div className="product_description">
            <div className="product_name">Điện thoại {specification.data.brand} {title}</div>
            <div className="overview">
                <p>Mô tả sơ lược:</p>
                <ul>
                    <li>Màn hình: {specification.data.display}</li>
                    <li>Camera Sau: {specification.data.rearCamera}</li>
                    <li>Camera Trước: {specification.data.frontCamera}</li>
                    <li>CPU: {specification.data.cpu}</li>
                    <li>Bộ Nhớ: {specification.data.storage}</li>
                    <li>RAM: {specification.data.ram}</li>
                    <li>Pin: {specification.data.batteryCapacity}</li>
                </ul>
            </div>
            <div className="order_info flex-row">
                <div className="product_price">{price} VNĐ</div>
                <div className="">
                    <div className="img_logo_des">
                    <img src={linkLogo} alt="Logo nhà cung cấp" />
                    </div>
                    <div className="button_container">
                        <button
                            type="button" className="product_button"
                            onClick={() => window.open(link)}
                        >Đến nơi bán</button>
                        {
                            !props.isFollowed ? <input
                                type="button" className="btn_follow_shop" defaultValue="Follow"
                                onClick={() => props.followProduct(identifier)}
                            />
                            :
                            <input
                                type="button" className="btn_follow_shop" defaultValue="UnFollow"
                                onClick={() => props.unFollowProduct(identifier)}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;