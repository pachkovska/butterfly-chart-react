import React, { Component } from 'react';

import './Barchart.css';

class Barchart extends Component {

    render() {

        return(
            
            <div className={this.props.graph}>
            {   
              this.props.data && this.props.data.map((el) => (
              <div className={this.props.graphBar} style={{ width: Number(el.value)/this.props.highest_value * 100 + '%' }}>
                  {el.value}</ div>
              ))
            }
            </div>
        )

    }

}

export default Barchart;
