import React, { Component } from 'react';
import {connect} from 'react-redux';
import MainTable from '../components/MainTable';

class MainContainer extends Component {

  render() {
    return (
      <div className="App">
        <MainTable />
      </div>
    );
  }
}


export default (MainContainer);
