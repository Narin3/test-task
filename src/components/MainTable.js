import React, { Component } from 'react';
import tableData1 from '../dataFiles/table_data.json';
import tableData2 from '../dataFiles/table_data_1.json';
import './styles/style.css';
import ScoreTable from './ScoreTable'
import moment from 'moment';
import CountDown from 'react-countdown-moment';
import './styles/style.css';


class MainTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            savingData: false,
            countDownStarter: false,
            data: {
                homeScore1: 0,
                awayScore1: 0,
                homeScore2: 0,
                awayScore2: 0,
                homeScore3: 0,
                awayScore3: 0,
                value1: 0,
                value2: 0
            },
            scoreData: {}
            
        }

    }

    handleChange = (e) => {
        this.setState({    
            data: Object.assign(
                {}, 
                this.state.data,
                { [e.target.name]: e.target.value }
            ),
            scoreData: {}
            })
    }

    getTimeCalculation = () => {
        if (this.state.countDownStarter) {
        return moment().add(90, 'minute')
        }
      }

    handleTimerStart = () => {
        this.setState({countDownStarter: true})
    }

    handleTimerPause = () => {
        this.setState({countDownStarter: false})
    }

    handleSubmit = () => {
        this.setState({savingData: true})
    }

    handleCancel = () => {
        this.setState({savingData: false})
    }

    render(){
    let tableData = this.state.savingData ? tableData1.tableData : tableData2.tableData
    let TableItems = (data) => {
        let dataTable = []
        for (let i in data){
            console.log(i)
            let item = <ScoreTable kind={data[i].Kind}
                                    sequence={data[i].sequence}
                                    events={data[i].Events}/>
            dataTable.push(item)
        }
        return dataTable
    } 

        let timer = this.getTimeCalculation()
        return (
            <div className='main-container'>
                <form>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <div className='main-content'>
                                <h2>Stuke</h2>
                                <div className='row'>
                                    <div className='col-sm-6 time-counter'>
                                        <CountDown endDate={timer}/>
                                    </div>
                                    <div className='col-sm-6 timer-buttons'>
                                        <button onClick={this.handleTimerStart} type='button' className='btn start-button'>Start</button>
                                        <button onClick={this.handleTimerPause} type='button' className='btn pause-button'>Pause</button>
                                    </div>
                                </div>
                                <div className='score-field'>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <input
                                                type="number"
                                                placeholder="home"
                                                name="homeScore1"
                                                value={this.state.data.homeScore1}
                                                min="0"
                                                step="1"
                                                onChange={(name) => this.handleChange(name)}
                                            />
                                            <br/>
                                            <input
                                                type="number"
                                                placeholder="away"
                                                name="awayScore1"
                                                value={this.state.data.awayScore1}
                                                min="0"
                                                step="1"
                                                onChange={(name) => this.handleChange(name)}
                                            />
                                        </div>
                                        <div className='col-sm-6'>
                                            <input
                                                type="number"
                                                placeholder="home"
                                                name="homeScore2"
                                                value={this.state.data.homeScore2}
                                                min="0"
                                                step="1"
                                                onChange={(name) => this.handleChange(name)}
                                            />
                                            <br/>
                                            <input
                                                type="number"
                                                placeholder="away"
                                                name="awayScore2"
                                                value={this.state.data.awayScore2}
                                                min="0"
                                                step="1"
                                                onChange={(name) => this.handleChange(name)}
                                            />
                                        </div>
                                    </div>
                                    <div className='second-score-bar'>
                                        <div className='row'>
                                            <div className='col-sm-6'>
                                            <input
                                                type="number"
                                                placeholder="home"
                                                name="homeScore3"
                                                value={this.state.data.homeScore3}
                                                min="0"
                                                step="1"
                                                onChange={(name) => this.handleChange(name)}
                                            />
                                            <br/>
                                            <input
                                                type="number"
                                                placeholder="away"
                                                name="awayScore3"
                                                value={this.state.data.awayScore3}
                                                min="0"
                                                step="1"
                                                onChange={(name) => this.handleChange(name)}
                                            />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-5'>
                            <div className='main-content'>
                                <h2>Corrector</h2>
                                <div className='corrector-field'>
                                    <div className='row'>
                                        <div className='col-sm-8'>
                                            <div>
                                                <label>A1: </label>
                                                <input
                                                    type="number"
                                                    name="value1"
                                                    value={this.state.data.value1}
                                                    min="0"
                                                    step="0.01"
                                                    onChange={(name) => this.handleChange(name)}
                                                />
                                            </div>
                                            <div>
                                                <label>A2: </label>
                                                <input
                                                    type="number"
                                                    name="value2"
                                                    value={this.state.data.value2}
                                                    min="0"
                                                    step="0.01"
                                                    onChange={(name) => this.handleChange(name)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div className='form-buttons'>
                                <button type='button' onClick={() => this.handleCancel()}className='btn pause-button'>Cancel</button>
                                <button type='button' onClick={(e) => this.handleSubmit(e)} className='btn start-button'>OK</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='score-table'>
                    <div className='table-container'>
                        {TableItems(tableData)}
                    </div>
                </div>
            </div>
        )
    }

}

export default MainTable;