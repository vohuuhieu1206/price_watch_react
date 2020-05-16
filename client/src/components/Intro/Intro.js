import React, { Component } from 'react';
import NewslettersForm from './NewslettersForm';
import BrandProduct from '../BrandProduct/BrandProduct';
import BrandProvider from '../BrandProvider/BrandProvider';

class Intro extends Component {
    render() {
        return (
            <div>
            <BrandProduct />

            <section className="special-area section_padding_100 clearfix" id="about">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="section-heading text-center">
                    <h2>Ý tưởng Single Page Application</h2>
                    <div className="line-shape" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="single-special text-center wow fadeInUp" data-wow-delay="0.2s">
                    <div className="single-icon">
                      <i className="fas fa-bolt" aria-hidden="true" />
                    </div>
                    <h4>Nhanh và nhẹ</h4>
                    <p>Cải thiện tốc độ phục vụ nhờ các đoạn mã chỉ được tải một lần trong suốt vòng đời của website.</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="single-special text-center wow fadeInUp" data-wow-delay="0.4s">
                    <div className="single-icon">
                      <i className="fas fa-star" aria-hidden="true" />
                    </div>
                    <h4>Trải nghiệm tuyệt vời</h4>
                    <p>Thông báo đến email của bạn ngay khi có sự biến động về giá của các sản phẩm mà bạn đang theo dõi.</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="single-special text-center wow fadeInUp" data-wow-delay="0.6s">
                    <div className="single-icon">
                      <i className="fas fa-crown" aria-hidden="true" />
                    </div>
                    <h4>Độ tin cậy cao</h4>
                    <p>Single Page Application chỉ có một trang và mọi link trỏ tới đều được đưa về trang chủ website.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="awesome-feature-area bg-white section_padding_100 clearfix" id="features">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading text-center">
                    <h2>Các chức năng chính</h2>
                    <div className="line-shape" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="single-feature">
                    <div className="single-icon"><i className="fas fa-search" aria-hidden="true" /></div>
                    <h5>Tìm sản phẩm</h5>
                    <p>Giúp bạn tìm các sản phẩm có giá rẻ nhất trên một loạt các sản phẩm thương hiệu hàng đầu từ các cửa hàng hàng đầu.</p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="single-feature">
                    <div className="single-icon"><i className="fas fa-comments-dollar" aria-hidden="true" /></div>
                    <h5>Xem đánh giá</h5>
                    <p>Bạn có thể duyệt qua nhiều lựa chọn sản phẩm và đọc các đánh giá từ những người đã mua hàng để giúp bạn có cái nhìn khách quan.</p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="single-feature">
                    <div className="single-icon"><i className="fas fa-chart-bar" aria-hidden="true" /></div>
                    <h5>Xem lịch sử giá</h5>
                    <p>Biểu đồ lịch sử giá thể hiện sự biến động giá qua các thời điểm giúp bạn đưa ra quyết định vào thời điểm phù hợp.</p>
                  </div>
                </div>
                
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="single-feature">
                    <div className="single-icon"><i className="fas fa-bell" aria-hidden="true" /></div>
                    <h5>Nhận thông báo</h5>
                    <p>Email thông báo sẽ được gửi đến bạn mỗi khi có sự thay đổi về giá của các sản phẩm mà bạn đã theo dõi.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <BrandProvider />
          <NewslettersForm />
          </div>
        );
    }
}

export default Intro;