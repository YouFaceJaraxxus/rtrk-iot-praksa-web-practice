import React, { Component } from 'react';

class CarItemComponent extends Component {
    state = { 
        newCarName : ''
     }
    render() { 
        return ( 
            <div>
                <h3>{this.props.car.name}</h3>
                <input type='text' value={this.state.newCarName} onChange={this.handleCarInputChange}></input>
                <button onClick={this.updateCar}>UPDATE ME</button>
                <button onClick={this.deleteCar}>DELETE ME</button>
            </div>
         );
    }

    handleCarInputChange = (event) => {
        this.setState({
            newCarName : event.target.value
        })
    }

    deleteCar = () => {
        this.props.deleteCarHandler(this.props.car);
    }

    updateCar = () => {
        this.props.updateCarHandler(this.props.car, this.state.newCarName);
    }
}
 
export default CarItemComponent;