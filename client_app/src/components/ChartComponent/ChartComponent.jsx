import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

class ChartComponent extends Component {
    constructor(props){
        super(props);

        let gyroChartData = new Object();
        gyroChartData.labels=['12:00', '13:00', '14:00', '15:00', '16:00'];
        gyroChartData.datasets = [{
            label: 'Gyro X',
            borderColor : "red",
            fill:false,
            data:[15, 23, 55, 65, 32]
        },{
            label: 'Gyro Y',
            borderColor: "blue",
            fill:false,
            data:[11, 90, 105, 56, -142]
        },
        {
            label: 'Gyro Z',
            borderColor: "green",
            fill:false,
            data:[99, 88, 100, 104, -1]
        }]

        console.log('chartData', gyroChartData);

        this.state.gyroChartData = gyroChartData;
    }

    

    state = {  }
    render() { 
        return ( 
            <div>
                <div>
                    Welcome to chart!
                </div>
                <div>
                    {this.state.gyroChartData == null ? 
                        <div>
                            No chart data
                        </div>

                        :

                        <Line data = {this.state.gyroChartData}></Line>
                    }
                </div>
                <div>
                    <Link to = '/start'>Go to start!</Link>
                </div>
            </div>
         );
    }
}
 
export default ChartComponent;