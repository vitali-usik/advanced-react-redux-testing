import React, { Component } from 'react';

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

    console.log(this.state.comment);
    this.setState({
      comment: ''
    });
  }

  render() {
    return (
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
    );
  }
}

export default CommentBox;
