import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }
  
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
  
    componentDidMount() {
      this.shouldNavigateAway();
    }

    render() {
      console.log('PP', this.props);
      return <ChildComponent {...this.props} />
    }
  }

  const mapStateToProps = ({ auth }) => ({
    auth,
  }); 

  return connect(mapStateToProps)(ComposedComponent);
};
