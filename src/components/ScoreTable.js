import React, { Component } from 'react'
import _ from 'lodash';
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
    this.setState({ closeTable: true })
  }

  handleTableOpen = () => {
    this.setState({ closeTable: false })
  }

  render() {
    
    let scoreData = _.map(this.props.events, (value, index) => {
        
        return (
            <div className="main-block-new">
                <div className="row" key={index}>
                    <div className="table-body  large-column">
                        {value.Name}
                    </div>
                    <div className="table-body  column">
                      {value.Name === "over" ? <i class="icon-up"></i> : <i class="icon-down"></i>} 
                      {value.K}
                    </div>
                </div>
            </div>)
    })


    return (
      <div className='table'>
        <div className='table-title'>
          {this.state.closeTable ?
            <p onClick={() => this.handleTableOpen()}>Kind <i class="down"></i></p>
            : <p onClick={() => this.handleTableHidden()}>Kind <i class="up"></i></p>
          }
        </div>
        {!this.state.closeTable &&
          <div>
            <div className={this.state.closeTable ? "animate slideOutUp hidden" : "main-block"}>
            </div>
            <div className='scrolable-data'>
              {scoreData}
            </div>
          </div>
        }
      </div>
    )
  }
}

export default ScoreTable;