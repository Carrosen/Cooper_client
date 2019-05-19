import React, { Component } from 'react';
import DisplayCooperResult from './DisplayCooperResult.jsx'
import InputFields from './InputFields.jsx'
import { Grid, Segment } from 'semantic-ui-react';


class CooperCalculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      distance: '',
      gender: 'female',
      age: '',
      authenticated: true,
      entrySaved: false
    }
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    })
  }

  entryHandler() {
    this.setState({ entrySaved: true, updateIndex: true })
  }

  render() {

    return (
      <>
      <Grid centered columns={2}>
        <Grid.Column>
          <InputFields
            inputChangeHandler={this.onChange.bind(this)}
          />
        </Grid.Column>
      </Grid>

      <Grid centered columns={2}>
        <Grid.Column>
          
            <DisplayCooperResult
              distance={this.state.distance}
              gender={this.state.gender}
              age={this.state.age}
              authenticated={this.state.authenticated}
              entrySaved={this.state.entrySaved}
              entryHandler={this.entryHandler.bind(this)}
            />
    
        </Grid.Column>
      </Grid>

      </>
    );
  }
}

export default CooperCalculator