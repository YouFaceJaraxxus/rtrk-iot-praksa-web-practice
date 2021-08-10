import React, { Component } from 'react';


class DeviceItemComponent extends Component {
    state = { 
        newMeasurementInterval : this.props.device.measurementInterval,
        device : this.props.device
        //serialNumber : ''
        //newCarName : ''
     }
    render() { 
        return ( 
            <div>
                <label>{this.props.device.serialNumber}</label>
                <input type='text' value={this.state.newMeasurementInterval} onChange={this.handleMeasurementIntervalInputChange}></input>
                <button onClick={this.updateDevice}>SET</button>
                <hr/>
            </div>
         );
    }

    handleMeasurementIntervalInputChange = (event) => {
        this.setState({
            newMeasurementInterval : event.target.value
        })
    }

    updateDevice = () => {
        this.props.updateDeviceHandler(this.props.device, this.state.newMeasurementInterval);
    }
}
 
export default DeviceItemComponent;