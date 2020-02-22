import React, { Component } from 'react';

import './BarChart.css';

class BarChart extends Component {

    render() {

        return(
            
            <div className={this.props.graph}>
            {   
              this.props.data && this.props.data.map((el) => (
              <div className={this.props.graphBar} style={{ width: Number(el.value)/this.props.highest_value * 100 + '%', backgroundColor: this.props.barColor }}>
                  {el.value}</ div>
              ))
            }
            </div>
        )

    }

}

export default BarChart;
