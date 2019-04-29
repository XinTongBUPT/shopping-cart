import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import firebase from '../../firebaseTest.js';
import PropTypes from 'prop-types';

import {
    TextField,
    // AppBar,
    Button
} from '../../components';
import './styles.css';

function MoveComponent(props) {
    const { classes } = props;
    return (
        <div style={{margin:'10px'}}>
            {/* <AppBar />  */}
            <div class="page-content">
                <h2>Please Login/Register</h2>
                <TextField label='user' placeholder='username' style={{marginBottom:'10px'}}/><br/>
                <TextField label='password' type='password' placeholder='password' style={{marginBottom:'10px'}}/>
                <br/>
                <Button name={"Login"} link={"/routine"}/>
                <br/>
                <Button name={"Register"} link={"/routine"}/>
            </div>
        </div>
    )
}

MoveComponent.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export { MoveComponent };

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};

export const Login = connect(mapStateToProps, {

})(MoveComponent);


