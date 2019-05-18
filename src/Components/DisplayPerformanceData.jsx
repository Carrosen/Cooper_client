import React, { Component } from 'react'
import { getData } from '../Modules/PerformanceData'
import { Line, Pie } from 'react-chartjs-2'
import moment from 'moment'
// import { ratings } from './Modules/CooperCalculator'

class DisplayPerformanceData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      performanceData: null
    }
  }

  //   indexUpdated() {
  //   this.setState({ updateIndex: false })
  // }

  componentDidMount() {
    this.getPerformanceData()
  }
  async getPerformanceData() {
    let result = await getData();
    this.setState({performanceData: result.data.entries})}

  render () {
    let dataIndex;
    let distances = []
    let labels = []
    let ratings = [
      'Excellent',
      'Above average',
      'Average',
      'Below average',
      'Poor'
    ];
    let messages = []

    if (this.props.updateIndex === true) {
      this.getPerformanceData();
    }
    if (this.state.performanceData != null) {
      this.state.performanceData.forEach(entry => {
        let dateString = entry.created_at;
        let dateObj = new Date(dateString);
        let momentObj = moment(dateObj)
        let momentString = momentObj.format('YYYY-MM-DD');
        distances.push(entry.data.distance)
        labels.push(momentString)
        messages.push(entry.data.message)
      })
      dataIndex = (
        <>
          {this.state.performanceData.map(item => {
            return <div key={item.id}>{item.data.message}</div>
          })}
        </>
      )
    }

    let data = {
      labels: labels,
      datasets: [{
        label: "My runs",
        data: distances,
        fill: false,
        lineTension: 0.1,
        borderColor: "#00cc99",
      }],
    }

    let piechart = {
      labels: ratings,
      datasets: [{
        data: [1000, 2000, 3000],
        backgroundColor: ['green', 'blue', 'purple', 'red', 'pink']
       }]
    }

    return (
      <>
        {dataIndex}
        <Line
          data = {data}
        />

        <Pie
          data = {piechart}
        />

      </>
    )
  }
}

export default DisplayPerformanceData