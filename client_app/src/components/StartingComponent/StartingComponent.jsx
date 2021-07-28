import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StartingComponent.css';
import NumberComponent from './NumberComponent/NumberComponent';

const colors = ['red', 'green', 'blue'];
class StartingComponent extends Component {

    constructor(props){
        super(props);
        this.state.myValue = 1000;
    }

    state = { 
        counter : 1,
        colorIndex : 0,
        incrementer : 0 ,
        incrementerInterval : null,
        textInput : ''
    }

    componentDidMount(){
        this.setState({
            incrementerInterval : setInterval(() => {
                console.log('incrementer', this.state.incrementer);
                this.setState({
                    incrementer : this.state.incrementer + 1
                })
            }, 1000)
        })
    }

    componentWillUnmount(){
        clearInterval(this.state.incrementerInterval);
    }

    incrementCounter = () => {
        let newCounter = this.state.counter + 1;
        this.setState({
            counter : newCounter,
            colorIndex : Math.abs(newCounter) % 3
        })
    }

    decrementCounter = () => {
        let newCounter = this.state.counter + 1;
        this.setState({
            counter : this.state.counter - 1,
            colorIndex : Math.abs(newCounter) % 3
        })
    }

    handleInputChange = (event) => {
        this.setState({
            textInput : event.target.value
        })
    }

    navigateToCars = () => {
        this.props.history.push('/cars/' + this.state.textInput);
    }

    render() { 
        return ( 
            <div>
                <div className = {`my-class`} style = {{color : colors[this.state.colorIndex]}}>
                    I'm a starting component.
                </div>
                <div className = 'my-other-class'>
                    The value of counter : {this.state.counter}
                </div>
                <div className = 'my-other-class'>
                    This is my value : {this.state.myValue}
                </div>
                <div>
                    Number Component:
                    <NumberComponent number = {this.state.incrementer}></NumberComponent>
                </div>
                <button onClick={this.incrementCounter}>INCREMENT</button>
                <button onClick={this.decrementCounter}>DECREMENT</button>
                <div>
                    <input type='text' onChange={this.handleInputChange} value={this.state.textInput}></input>
                </div>
                <hr/>
                <button onClick={this.navigateToCars}>GO TO CARS WITH TEXT VALUE</button>
                <hr/>
                <Link to = {`cars/${this.state.incrementer}`}>Go to cars!</Link>
                <div>
                    <Link to = '/chart'>Go to charts!</Link>
                </div>
            </div>
         );
    }
}
 
export default StartingComponent;