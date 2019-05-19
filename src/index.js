import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import CooperCalculator from './Components/CooperCalculator'
import DisplayPerformanceData from './Components/DisplayPerformanceData'
import Nav from './Components/Header'
import BMICalculator from './Components/BMICalculator'
import 'semantic-ui-css/semantic.min.css'

const Application = () => {
  return (
    <>
    <Nav />
    <Switch>
      <Route exact path='/cooper' component={CooperCalculator}></Route>
      <Route exact path='/bmi' component={BMICalculator}></Route>
      <Route exact path='/history' component={DisplayPerformanceData}></Route>
    </Switch>
    </>
  )
}


ReactDOM.render((
  <BrowserRouter>
    <Application />
  </BrowserRouter>
), document.getElementById('root'));
serviceWorker.unregister();