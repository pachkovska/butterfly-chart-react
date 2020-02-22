import React, {Component} from 'react'
import {render} from 'react-dom'

import {ButterflyChart} from '../../src/'

class Demo extends Component {

  state = {
    title: 'Chart Title',
    option_select_1: 'Dataset Title 1',
    option_select_2: 'Dataset Title 2',
    highest_value: '',
    data_option_1: [{time_period: '2010', value: '345'}, , {time_period: '2011', value: '1245'}, {time_period: '2012', value: '1180'}, {time_period: '2013', value: '1290'}],
    data_option_2: [{time_period: '2010', value: '455'}, {time_period: '2011', value: '650'}, {time_period: '2012', value: '1380'}, {time_period: '2013', value: '1245'}],
    barColor_1: '#aab6ca',
    barColor_2: '#c7f0db',
  }

  componentDidMount () {
    const highest1 = Math.max(...this.state.data_option_1.map(element => Number(element.value)).filter(element => !Number.isNaN(element)));
    const highest2 = Math.max(...this.state.data_option_2.map(element => Number(element.value)).filter(element => !Number.isNaN(element)));
    this.setState({
      highest_value: Math.max(highest1, highest2)
    });
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
        barColor_1={this.state.barColor_1}
        barColor_2={this.state.barColor_2} 
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
