import React, { Component } from 'react';
import '../../../Style.css';
import './DeviceItemComponent.css';


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
                <div>
                    <label>ID</label>
                    <label>{this.props.device.id}</label>
                </div>
                <hr/>
                <div>
                    <label>Serial number</label>
                    <label>{this.props.device.serialNumber}</label>
                </div>
                <hr/>
                <div>
                    <label>Measurement interval</label>
                    <input type='text' value={this.state.newMeasurementInterval} onChange={this.handleMeasurementIntervalInputChange}></input>
                </div>
                <button id="button1" onClick={this.updateDevice}>SET</button>
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