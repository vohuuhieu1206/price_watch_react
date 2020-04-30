import React from 'react';
import AVT from '../../img/avatar1.jpg';

const renderRating = rating => {
    let rateArr = []
    for(let i = 0; i < rating; i++) {
        rateArr.push(<span key={i} className="fa fa-star star-checked" />);
    }
    return rateArr;
}

export default function reviewItem({ reviewData: {star, content, name_reviewer, crawlDate} }) {
    
    return (
        <div className="row comments">
            <div className="comment_user col-12 col-sm-12 col-md-12 col-lg-12 row">
                <div className="user_profile_avt col-4 col-sm-3 col-md-2 col-lg-1 align-self-center">
                    <img src={AVT} alt="avt" className="img_user_avt" />
                </div>
                <div className="user_rating_info col-8 col-sm-9 col-md-10 col-lg-11">
                    <p className="user_name font-weight-bold text-primary">{name_reviewer}</p>
                    <small
                        className="comment_time"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Nhận xét của người đã đặt mua hàng thành công"
                    >
                        {/* <i className="fas fa-clock" /> Đã mua hàng: {new Date(crawlDate).toLocaleDateString()} */}
                    </small>
                    <div className="voting">
                        <div className="star">
                            {
                                renderRating(star)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="comment_content col-12 col-sm-12 col-md-12 col-lg-12">
                {/* <div className="comment_title font-weight-bold text-danger">Đóng Gói Kỹ, Sản Phẩm Tốt</div> */}
                <p className="cmt_text">{content}</p>
                <div className="cmt_image_album row">
                    {/* <a href="img/1.jpg" className="col-6 col-sm-6 col-md-3 col-lg-2"><img src="img/1.jpg" alt="" /></a>
                    <a href="img/3.jpg" className="col-6 col-sm-6 col-md-3 col-lg-2"><img src="img/3.jpg" alt="" /></a>
                    <a href="img/2.jpg" className="col-6 col-sm-6 col-md-3 col-lg-2"><img src="img/2.jpg" alt="" /></a>
                    <a href="img/3.jpg" className="col-6 col-sm-6 col-md-3 col-lg-2"><img src="img/3.jpg" alt="" /></a> */}
                </div>
            </div>
            <div className="line" />
        </div>
    )
}