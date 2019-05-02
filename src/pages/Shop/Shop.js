import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../../firebaseTest.js';

import {
    Shelf,
    Filter,
    Cart,
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
          <h1 align="center" >The TOP Shop</h1>
          <GithubCorner />
          <main>
            {/* <Filter /> */}
            <Shelf />
          </main>
          <Cart />
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
