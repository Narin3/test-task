import React, {Component} from 'react'
import _ from 'lodash';
import tableData from '../dataFiles/table_data.json';

import './styles/style.css';

class ScoreTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closeTable: false,
            data: []
        }
    }

    handleTableHidden = () => {
        this.setState({closeTable: true})
    }

    handleTableOpen = () => {
        this.setState({closeTable: false})
    }

    render() {
        let scoreData = _.map(tableData.tableData, (value, index) => {
            // console.log(value)
            return (
                <div className="main-block-new">
                    <div className="row" key={index}>
                        <div className="table-body  large-column">
                        {value.Kind}
                        </div>
                        <div className="table-body  column">
                        {value.Sequence}
                        </div>
                        <div className="table-body large-column">
                        {value.esiminch}
                        </div>
                    </div>
                </div>)
            
            _.map(value.Events, (eventValue, dataKey) => {
                console.log(eventValue)
                return (
                <div className="main-block-new">
                    <div className="row" key={dataKey}>
                        <div className="table-body  large-column">
                        {value.Kind}
                        </div>
                        <div className="table-body  column">
                        {value.Sequence}
                        </div>
                        <div className="table-body large-column">
                        {value.esiminch}
                        </div>
                    </div>
                </div>)
            })
          });

        return (
            <div className='table'>
                <div className='table-container'>
                    <div className='table-title'>
                    {this.state.closeTable ?
                        <p onClick={() => this.handleTableOpen()}>Kind <i class="down"></i></p>
                    : <p onClick={() => this.handleTableHidden()}>Kind <i class="up"></i></p>
                    }    
                    </div>
                    {!this.state.closeTable &&
                        <div>
                            <div className={this.state.closeTable ? "animate slideOutUp hidden" : "main-block"}>
                                <div className="row">
                                    <div className="table-header large-column">
                                        Kind
                                    </div>
                                    <div className="table-header column">
                                        Sequence
                                    </div>
                                    <div className="table-header large-column">
                                        Events
                                    </div>
                                </div>
                                
                            </div>
                            <div className='scrolable-data'>
                                {scoreData}
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default ScoreTable;