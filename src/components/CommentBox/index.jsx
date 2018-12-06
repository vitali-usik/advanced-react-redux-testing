import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../../actions';

class CommentBox extends Component {
  state = {
    comment: '',
  };

  handleChange = (evt) => {
    this.setState({
      comment: evt.target.value,
    });
  }

  submitComment = (evt) => {
    evt.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({
      comment: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitComment}>
            <h4>Add a Comment</h4>
          <textarea
            onChange={this.handleChange}
            value={this.state.comment}
          />
          <div>
            <button type="submit">Submit Comment</button>
          </div>
        </form>
        <button
          className="fetch-comments"
          onClick={this.props.fetchComments}
        >
        Fetch Comments
        </button>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({

// });

export default connect(null, actions)(CommentBox);
