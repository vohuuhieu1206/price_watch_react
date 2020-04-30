import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getReviews } from '../../actions/products';

import ReviewImtem from './ReviewItem';

class ReviewsList extends React.Component {

    componentDidMount() {
        const { pid } = this.props.match.params;
        this.props.getReviews(pid);
    }

    render() {
        return this.props.reviews.map(review => <ReviewImtem key={review.identifier} reviewData={review} />)
    }
}

const mapStateToProps = state => {
    return { reviews: state.reviews }
}

export default connect(
    mapStateToProps,
    { getReviews }
)(withRouter(ReviewsList));
