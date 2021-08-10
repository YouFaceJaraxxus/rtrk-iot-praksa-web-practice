import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChartComponent from '../components/ChartComponent/ChartComponent';
import DefaultComponent from '../components/DefaultComponent/DefaultComponent';
import DevicesComponent from '../components/DevicesComponent/DevicesComponent';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import MeasurementComponent from '../components/MeasurementComponent/MeasurementComponent';

class Routes extends Component {
    state = {  }
    render() { 
        return ( 
            <BrowserRouter>
                <HeaderComponent></HeaderComponent>
                <Switch>
                    <Route path='/data' component={MeasurementComponent}></Route>
                    <Route path='/device/:id' component={ChartComponent}></Route>
                    <Route path='/devices' component={DevicesComponent}></Route>
                    <Route path='/' component={DevicesComponent}></Route>
                </Switch>
            </BrowserRouter>
         );
    }
}
 
export default Routes;