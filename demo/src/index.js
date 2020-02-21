import React, {Component} from 'react'
import {render} from 'react-dom'

import {ButterflyChart} from '../../src/'

class Demo extends Component {

  state = {
    title: 'Chart Title',
    option_select_1: '',
    option_select_2: '',
    highest_value: '',
    data_option_1: [{time_period: '2010', value: '345'}, {time_period: '2011', value: '650'}],
    data_option_2: [{time_period: '2010', value: '345'}, {time_period: '2011', value: '650'}],
  }

  render() {
    return <div>
      <h1>butterfly-chart-react Demo</h1>
      <ButterflyChart
        title={this.state.title}
        option_select_1={this.state.option_select_1}
        option_select_2={this.state.option_select_2}
        data_option_1={this.state.data_option_1}
        data_option_2={this.state.data_option_2}
        highest_value={this.state.highest_value}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
