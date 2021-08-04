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
                    <Link to = {`/cars/1?myParam=someOtherValue`}>Go to cars!</Link>
                </div>
                <div>
                    <Link to = '/chart'>Go to charts!</Link>
                </div>
                <hr/>
                <div>https://drive.google.com/file/d/1KZZ7kYwbbRFue5IVbwOc38ivQWs-6vKc/view?usp=sharing</div>
                <hr/>
                <div>https://github.com/YouFaceJaraxxus/rtrk-iot-praksa-web-practice</div>
                <div>
                    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
                </div>
                <div>
                    flush privileges;
                </div>
                <hr/>
                <div>
                    alter table device modify column measurementInterval int;
                </div>
                <div>
                insert into device (measurementInterval, serialNumber) values (1000, '3112996101464');
                </div>
            </div>
            
         );
    }
}
 
export default DefaultComponent;