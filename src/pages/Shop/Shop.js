import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../../firebaseTest.js';


import Grid from '@material-ui/core/Grid';

import {
    AppBar,
    Paper,
    List,
    Button,
    Shelf,
    // Filter,
    // FloatCart,
    GithubCorner
} from '../../components';
import './styles.css';



// class RoutineComponent extends Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//       routines: [],
//       key: ''
//     };
//   }
//     render() {
//         return (
//             <div>
//                 <AppBar/>
//                 <br />
//                 <div class="page-content">
//                     <h3>Your Routine: Favorite Ab Workout</h3>
//                     <Button name={"Start Workout!"} link={"/move"}/>
//                     <br />
//                     <List />
//                 </div>
//             </div>
//         );
//     }
// }

class RoutineComponent extends Component {
    render() {
      return (
        <React.Fragment>
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
