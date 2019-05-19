import React, { Component } from 'react'
import DisplayBMIResults from './DisplayBMIResults'
import { Form } from 'semantic-ui-react'


class InputBMI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'metric'
    }
  }
  

  componentDidUpdate(prevProps) {
    if (prevProps.method !== this.props.method) {
      this.setState({method: this.props.method, weight: '', height: ''})
    }
  }


  render() {
    return (
          <Form>
            <Form.Group id='form' widths='equal'>
              <Form.Input
                fluid
                label='Weight'
                placeholder={this.state.method === 'metric' ? 'kg' : 'lbs'}
                name='weight'
                value={this.state.weight} 
                onChange={ (e) => this.setState({ weight: e.target.value}) }
              />

              <Form.Input
                fluid
                label='Height'
                placeholder={this.state.method === 'metric' ? 'cm' : 'in'}
                name='height' 
                value={this.state.height} 
                onChange={ (e) => this.setState({ height: e.target.value}) }
              />
              
            </Form.Group>

            <DisplayBMIResults 
              weight={this.state.weight}
              height={this.state.height}
              method={this.state.method}
            />

          </Form>
    );
  }  
}

export default InputBMI
