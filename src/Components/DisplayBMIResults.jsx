import React, { Component } from 'react';
import { BMICalculation } from '../Modules/BMICalculation'

class DisplayBMIResults extends Component {
  calculate() {
    let weight= this.props.weight;
    let height= this.props.height;
    let method= this.props.method

    return BMICalculation(weight, height, method);
  }

  render() {
    return (
      <div id="response">
        {this.calculate()}
      </div>
    )
  }
}

export default DisplayBMIResults

