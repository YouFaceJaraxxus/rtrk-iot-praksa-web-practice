import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class DevicesComponent extends Component {
    
    constructor(props){
        super(props);
    }
    state = { 
        devices:null
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
                <div key = {device.id}>
                    {device.id} - {device.serialNumber} - {device.measurementInterval}
                </div>
            ))

            :

            <div>
                No devices.
            </div>
        )
    }

    render() { 
        return ( 
            <div>
                <div>
                    Hello, I'm the DEVICES component!
                </div>
                <div>
                    <h1>Devices list</h1>
                    {this.mapDevices()}
                </div>
                <div>
                    <Link to = 'start'>Go to start!</Link>
                </div>
            </div>
         );
    }
}
 
export default DevicesComponent;