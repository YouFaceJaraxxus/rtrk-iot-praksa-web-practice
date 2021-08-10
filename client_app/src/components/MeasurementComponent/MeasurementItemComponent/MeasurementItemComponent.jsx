import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class MeasurementItemComponent extends Component {

    state = {
        measurement : null
    }

    componentDidMount = () => {
        this.getLatestMeasurement();
    }

    getLatestMeasurement = () => { 
        axios.get(`/api/data/device/${this.props.deviceId}/latest`)
        .then(response => {
            this.setState({
                measurement : response.data.result
            })
        })  
    }

    render() { 
        return (
            
            <div>
                {this.state.measurement==null?

                <div>
                    Loading data.
                </div>

                :

                <div>
                    <h2>Device: {this.props.deviceId}</h2>

                    <div>Temperature:   {this.state.measurement.temperature}</div>
                    <div>Gyroscope:     ({this.state.measurement.gyroX}, {this.state.measurement.gyroY}, {this.state.measurement.gyroZ})</div>
                    <div>Accelerometer: ({this.state.measurement.accX}, {this.state.measurement.accY}, {this.state.measurement.accZ})</div>
                    <div>Magnetometer:  ({this.state.measurement.magX}, {this.state.measurement.magY}, {this.state.measurement.magZ})</div>
                    <div>Date:          {this.state.measurement.date}</div>

                    <Link to = {{pathname: '/device/' + this.props.deviceId, myParam: 'CHART'}}> Go to chart! </Link>
                    
                    <hr/>
                </div>
                
                }

            </div>
         );
    }

    
}
 
export default MeasurementItemComponent;