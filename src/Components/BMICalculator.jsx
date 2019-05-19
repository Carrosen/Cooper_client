import React from 'react'
import InputBMI from './InputBMI'
import { Tab, Grid } from 'semantic-ui-react'


const panes = [
  { menuItem: 'Metric', render: () => <Tab.Pane attached={false}>
    <InputBMI
      method="metric"
    />
    </Tab.Pane>
  },
  { menuItem: 'Imperial', render: () => <Tab.Pane attached={false}>
    <InputBMI
      method="imperial"
    />
    </Tab.Pane>
  },
]

const BMICalculator = () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Tab name="method" menu={{ secondary: true, pointing: true }} panes={panes}/>

    </Grid.Column>
  </Grid>
)

export default BMICalculator
