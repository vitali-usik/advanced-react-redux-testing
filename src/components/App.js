import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentBox from './CommentBox';
import CommentList from './CommentList';

import { changeAuth } from './../actions';

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return <button onClick={this.props.logout}>Sign Out</button>
    } else {
      return <button onClick={this.props.login}>Sign In</button>
    }
  }
  
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(changeAuth(true)),
  logout: () => dispatch(changeAuth(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
