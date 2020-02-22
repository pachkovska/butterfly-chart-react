import React, { Component } from 'react';
import BarChart from '../BarChart/BarChart.js';

import './ButterflyChart.css';

class ButterflyChart extends Component {

    render() {

    const time_periods = []

    return (
        <div className="ChartAreaContainer Card--style">
            <div className="ChartAreaContainer-dimention">{this.props.title}</div>
                <div className="ChartAreaContainer-leftLabel">{this.props.option_select_1}</div>
                <div className="ChartAreaContainer-rightLabel">{this.props.option_select_2}</div>
                <BarChart
                  data={this.props.data_option_1}
                  option_title={this.props.option_select_1}
                  graph="Graph1"
                  graphBar="Graph1-bar"
                  highest_value={this.props.highest_value}
                  barColor={this.props.barColor_1} 
                />
                <div className="TimePeriods">
                  { 
                    this.props.data_option_1 && this.props.data_option_2 &&
                    this.props.data_option_1.forEach(element => {
                        (!time_periods.includes(element.time_period) && time_periods.push(element.time_period))
                    })
                  }
                  {
                      time_periods.map(time_period => <div>{time_period}</div>)
                  }
                </div>
                <BarChart
                  data={this.props.data_option_2}
                  option_title={this.props.option_select_2}
                  graph="Graph2"
                  graphBar="Graph2-bar"
                  highest_value={this.props.highest_value}
                  barColor={this.props.barColor_2} 
                />
            </div>
    )}
}

export default ButterflyChart;
