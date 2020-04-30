import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-social">
                <footer className="text-center section_padding_70">
                    <div className="footer-text">
                        <h2>Phones Price Comparison</h2>
                    </div>
                    <div className="footer-social-icon">
                        <a href="#face">
                            <i className="fab fa-facebook" aria-hidden="true" />
                        </a>
                        <a href="#twitter">
                            <i className="active fab fa-twitter" aria-hidden="true" />
                        </a>
                        <a href="#ins">
                            <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                    </div>
                    <div className="footer-menu">
                        <nav>
                            <ul>
                                <li><a href="#home">TRANG CHỦ</a></li>
                                <li><a href="#about">TẠI SAO LÀ SPA?</a></li>
                                <li><a href="#features">CHỨC NĂNG</a></li>
                                <li><a href="#contact">NHẬN THÔNG BÁO</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="copyright-text">
                        <p>Demo báo cáo đề tài Luận văn 2020</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;