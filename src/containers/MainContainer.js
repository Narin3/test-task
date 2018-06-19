import React, { Component } from 'react';
import {connect} from 'react-redux';
import MainTable from '../components/MainTable';
import { getTableData } from '../actions/scoreActions'

class MainContainer extends Component {

  componentWillMount() {
    this.props.getTableData()
  }

  render() {
    return (
      <div className="App">
        <MainTable />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getTableData: () => dispatch(getTableData()),
  dispatch
})

const mapStateToProps = (store) => ({
  fetching: store.table.fetching,
  fetched: store.table.fetched
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
