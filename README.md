# butterfly-chart-react

[![npm package][npm-badge]][npm]

Describe butterfly-chart-react here.

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

Re-usable Butterfly React Chart Component allows to visually compare bar graph time series data analysis of 2 datasets that represent same period of time.  

## Installation  

`npm install --save-dev butterfly-chart-react` # using npm 
`yarn add butterfly-chart-react`               # using yarn

## Example use  

```
import React, {Component} from 'react';
import {ButterflyChart} from 'butterfly-chart-react';  

class App extends Component {

    state = { 
        title: 'Chart Title',
        option_select_1: '',
        option_select_2: '',
        highest_value: '',
        data_option_1: [{time_period: '2010', value: '345'}, {time_period: '2011', value: '650'}],
        data_option_2: [{time_period: '2010', value: '345'}, {time_period: '2011', value: '650'}],
    }
```
  render() {
    return (
      <div className="App">
        <ButterflyChart 
            title={this.state.title}
            option_select_1={this.state.option_select_1}
            option_select_2={this.state.option_select_2}
            data_option_1={this.state.data_option_1}
            data_option_2={this.state.data_option_2}
            highest_value={this.state.highest_value}
        />
      </div>
    );
  }
}
```
