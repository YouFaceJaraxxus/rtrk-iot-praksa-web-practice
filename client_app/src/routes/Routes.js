import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CarsComponent from '../components/CarsComponent/CarsComponent';
import ChartComponent from '../components/ChartComponent/ChartComponent';
import DefaultComponent from '../components/DefaultComponent/DefaultComponent';
import StartingComponent from '../components/StartingComponent/StartingComponent';

class Routes extends Component {
    state = {  }
    render() { 
        return ( 
            <BrowserRouter>
                <Switch>
                    <Route exact path='/cars/:id' component={CarsComponent}></Route>
                    <Route path='/cars' component={CarsComponent}></Route>
                    <Route path='/chart' component={ChartComponent}></Route>
                    <Route path='/start' component={StartingComponent}></Route>
                    <Route path='/' component={DefaultComponent}></Route>
                </Switch>
            </BrowserRouter>
         );
    }
}
 
export default Routes;