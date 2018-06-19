import React, { Component } from 'react';
import {connect} from 'react-redux';
import MainTable from '../components/MainTable';
import { getTableData, getTableDataUpdate } from '../actions/scoreActions'

const mapDispatchToProps = (dispatch) => ({
  getTableData: () => dispatch(getTableData()),
  getTableDataUpdate: () => dispatch(getTableDataUpdate()),
  dispatch
})

const mapStateToProps = (store) => ({
  fetching: store.table.fetching,
  fetched: store.table.fetched,
  data: store.table.data,
  updatedData: store.table.updatedData
})

class MainContainer extends Component {

  componentWillMount() {
    this.props.getTableData()
    this.props.getTableDataUpdate()
  }

  render() {
    console.log(this.props.updatedData)
    return (
      <div className="App">
        <MainTable data={this.props.data} updatedData={this.props.updatedData}/>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
