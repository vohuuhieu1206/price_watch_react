import React, { Component } from 'react';
import axios from 'axios';

class NewslettersForm extends Component {
    constructor() {
        super();

        this.state = {
            guestName: "",
            emailName: ""
        }

    }

    onSubmitForm = async e => {
        e.preventDefault();
        const response = await axios.post(process.env.REACT_APP_API_URL + "/newsletters", this.state);

        console.log(response)
        if (response) {
          alert("Thành công")
        }

        
    }

    render() {
        return (
            

            <div>
            <section className="footer-contact-area section_padding_100 clearfix" id="contact">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="section-heading">
                    <h2>Giữ liên lạc với chúng tôi</h2>
                    <div className="line-shape" />
                  </div>
                  <div className="footer-text">
                    <p>Bạn sẽ được nhận quảng cáo từ chúng tôi.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact_from">
                    <form onSubmit={e => e.preventDefault()} action="#" method="post">
                      <div className="contact_input_area">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input onChange={e => this.setState({ guestName: e.target.value })} type="text" className="form-control" name="name" id="name" placeholder="Họ và tên" required />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input onChange={e => this.setState({ emailName: e.target.value })} type="email" className="form-control" name="email" id="email" placeholder="E-mail" required />
                            </div>
                          </div>
                          <div className="col-12">
                            <button
                                type="submit" className="btn submit-btn"
                                onClick={e => this.onSubmitForm(e)}
                            >
                                Gửi
                                </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

            </div>
        );
    }
}

export default NewslettersForm;