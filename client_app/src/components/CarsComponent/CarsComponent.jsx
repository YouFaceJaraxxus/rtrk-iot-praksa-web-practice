import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CarItemComponent from './CarItemComponent/CarItemComponent';
import qs from 'qs';

class CarsComponent extends Component {
    
    constructor(props){
        super(props);
        console.log('car props', props);
        this.state.carId = this.props.match?.params?.id ? this.props.match.params.id : 'NO PARAMS PASSED';
        let queryParams = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
        console.log(queryParams);
        this.state.myParam = queryParams?.myParam;
    }
    state = { 
        cars:null,
        carName : ''
     }

    componentDidMount(){
        this.getAllCars();
    }

    getAllCars = () => {
        axios.get('/api/car')
        .then(response => {
            this.setState({
                cars : response.data.cars
            })
        })
    }

    mapCars = () => {
        let cars = this.state.cars;
        return(
            cars==null?

            <div>
                Loading cars...
            </div>

            :

            cars&&cars.length>0? cars.map(car => (
                <CarItemComponent 
                    key={car.id}
                    car = {car}
                    deleteCarHandler = {this.deleteCar}
                    updateCarHandler = {this.updateCar}
                >
                    {car.name}
                </CarItemComponent>
            ))

            :

            <div>
                No cars.
            </div>
        )
    }

    deleteCar = (car) => {
        axios.delete('/api/car/' + car.id).then(response => {
            console.log('delete response', response)
            this.setState({
                cars : this.state.cars.filter(singleCar => singleCar.id != car.id)
            })
        })
    }

    updateCar = (car, newCarName) => {
        let body = {
            name : newCarName
        }
        axios.put('/api/car/' + car.id, JSON.stringify(body), {
            headers: {
                'Content-type' : 'application/json'
            }
        }).then(response => {
            console.log('update response', response)
            this.setState({
                cars : this.state.cars.map(singleCar => {
                    if(singleCar.id!=car.id) return singleCar;
                    else{
                        singleCar.name = newCarName;
                    }
                    return singleCar;
                })
            })
        })
    }

    handleCarInputChange = (event) =>{
        this.setState({
            carName : event.target.value
        })
    }

    addCar = () => {
        let body = {
            name : this.state.carName
        }
        axios.post('/api/car' , JSON.stringify(body), {
            headers: {
                'Content-type' : 'application/json'
            }
        }).then(response => {
            console.log('post response', response)
            let cars = this.state.cars;
            cars.push({
                name : this.state.carName,
                id : response.data.result.insertId
            })
            this.setState({
                cars : cars
            })
        })
    }

    render() { 
        return ( 
            <div>
                <div>
                    Hello, I'm the CARS component! {this.state.carId}
                </div>
                <div>
                    {this.state.myParam}
                </div>
                <div>
                    <h1>Cars list</h1>
                    {this.mapCars()}
                </div>
                <div>
                    <Link to = {{pathname : '/start', myParam : 'hello'}}>Go to start!</Link>
                </div>
                <hr/>
                <input type='text' value={this.state.carName} onChange={this.handleCarInputChange}></input>
                <button onClick={this.addCar}>ADD NEW CAR</button>
            </div>
         );
    }
}
 
export default CarsComponent;