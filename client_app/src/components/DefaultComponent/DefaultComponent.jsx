import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DefaultComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div>
                I'm a default component!
                </div>
                <div>
                    <Link to = {`/devices/1?myParam=someOtherValue`}>Go to devices!</Link>
                </div>
                <div>
                    <Link to = '/chart'>Go to charts!</Link>
                </div>
            </div>
            
         );
    }
}
 
export default DefaultComponent;