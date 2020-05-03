import React from 'react';
import { withRouter } from 'react-router-dom';
import { getVerifyEmail } from '../../actions/auth';
import { connect } from 'react-redux';

class VerifyEmail extends React.Component {
    constructor() {
        super();
    }

    async componentDidMount() {
        const { token } = this.props.match.params;
        if(token) {
            const response = await this.props.getVerifyEmail(token);
            if(response) {
                alert("Xác thực thành công, vui lòng đăng nhập!");
            } else {
                alert("Xác thực thất bại, vui lòng thử lại!")
            }
            this.props.history.push("/");
        }
    }

    render() {
        return <div>Verify</div>
    }
}

export default connect(
    null,
    { getVerifyEmail }
)(withRouter(VerifyEmail));