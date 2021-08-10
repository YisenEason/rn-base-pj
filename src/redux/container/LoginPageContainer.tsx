import React from 'react';
import { connect } from 'react-redux';
import { addAction } from '../actions/TestActions';
import LoginPage from '../../component/page/Login/LoginPage';

const mapStateToProps = function (state:any) {
  console.log(state);
  return state.testReducer;
}

const mapDispachToProps = (dispatch: (arg0: any) => any) => {
  return {
    addAction: (val:number) => dispatch(addAction(val))
  };
};

export default connect(mapStateToProps, mapDispachToProps)(LoginPage);
