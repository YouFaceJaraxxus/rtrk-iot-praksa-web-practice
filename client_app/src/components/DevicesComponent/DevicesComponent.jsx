import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import DeviceItemComponent from './DeviceItemComponent/DeviceItemComponent';
import qs from 'qs';

class DevicesComponent extends Component {
    
    constructor(props){
        super(props);
        console.log('device props', props);
        this.state.deviceId = this.props.match?.params?.id ? this.props.match.params.id : 'NO PARAMS PASSED';
        let queryParams = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
        console.log(queryParams);
        this.state.myParam = queryParams?.myParam;
    }
    state = { 
        devices:null,
        measurementInterval : '',
        serialNumber : ''
     }

    componentDidMount(){
        this.getAllDevices();
    }

    getAllDevices = () => {
        axios.get('/api/device')
        .then(response => {
            this.setState({
                devices : response.data.devices
            })
        })
    }

    mapDevices = () => {
        let devices = this.state.devices;
        return(
            devices==null?

            <div>
                Loading devices...
            </div>

            :

            devices&&devices.length>0? devices.map(device => (
                <DeviceItemComponent 
                    key={device.id}
                    device = {device}
                    deleteDeviceHandler = {this.deleteDevice}
                    updateDeviceHandler = {this.updateDevice}
                >
                </DeviceItemComponent>
            ))

            :

            <div>
                No devices.
            </div>
        )
    }

    deleteDevice = (device) => {
        axios.delete('/api/device/' + device.id).then(response => {
            console.log('delete response', response)
            this.setState({
                devices : this.state.devices.filter(singleDevice => singleDevice.id != device.id)
            })
        })
    }

    updateDevice = (device, newMeasurementInterval) => {
        let body = {
            measurementInterval : newMeasurementInterval
        }
        axios.put('/api/device/' + device.id +'/measurementInterval',  JSON.stringify(body), {
            headers: {
                'Content-type' : 'application/json'
            }
        }).then(response => {
            console.log('update response', response)
            this.setState({
                devices : this.state.devices.map(singleDevice => {
                    if(singleDevice.id!=device.id) return singleDevice;
                    else{
                        singleDevice.measurementInterval = newMeasurementInterval;
                    }
                    return singleDevice;
                })
            })
        })
    }

    handleMeasurementIntervalInputChange = (event) => {
        this.setState({
            measurementInterval : event.target.value
        })
    }

    handleSerialNumberInputChange = (event) => {
        this.setState({
            serialNumber : event.target.value
        })
    }

    addDevice = () => {
        let body = {
            measurementInterval : this.state.measurementInterval,
            serialNumber : this.state.serialNumber
        }
        axios.post('/api/device' , JSON.stringify(body), {
            headers: {
                'Content-type' : 'application/json'
            }
        }).then(response => {
            console.log('post response', response)
            let devices = this.state.devices;
            devices.push({
                measurementInterval : this.state.measurementInterval,
                serialNumber : this.state.serialNumber,
                id : response.data.result.insertId
            })
            this.setState({
                devices : devices
            })
        })
    }


    render() { 
        return ( 
            <div>
                <div>
                    {this.state.myParam}
                </div>
                <div>
                    <h1>Devices list</h1>
                    {this.mapDevices()}
                </div>
                
                <hr/>
                <input type='text' value={this.state.serialNumber} onChange={this.handleSerialNumberInputChange}></input>
                <input type='text' value={this.state.measurementInterval} onChange={this.handleMeasurementIntervalInputChange}></input>
                
                <button onClick={this.addDevice}>ADD DEVICE</button>
            </div>
         );
    }
}
 
export default DevicesComponent;