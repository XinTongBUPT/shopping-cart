import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../../firebaseTest.js';

import {
    Shelf,
    // Filter,
    // FloatCart,
    GithubCorner
} from '../../components';
import './styles.css';


class RoutineComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }
    render() {
      return (
        <React.Fragment>
          <br/><br/><br/><br/>
          <GithubCorner />
          <main>
            {/* <Filter /> */}
            <Shelf />
          </main>
          {/* <FloatCart /> */}
        </React.Fragment>
      );
    }
}

export { RoutineComponent };

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};

export const Shop = connect(mapStateToProps, {

})(RoutineComponent);
