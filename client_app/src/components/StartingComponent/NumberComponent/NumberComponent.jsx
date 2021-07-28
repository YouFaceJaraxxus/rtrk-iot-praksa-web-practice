import React, { Component } from 'react';

class NumberComponent extends Component {
    constructor(props){
        super(props);
        this.state.passedNumber = props.number;
        this.state.passedNumberWithRefresh = props.number;
    }
    state = {}

    componentWillReceiveProps(newProps){
        this.setState({
            passedNumberWithRefresh : newProps.number
        })
    }
    render() { 
        return ( 
            <div>
                <div>Passed number with props : {this.props.number} </div>
                <div>Passed number with state : {this.state.passedNumber} </div>
                <div>Passed number with refresh : {this.state.passedNumberWithRefresh} </div>
            </div>
            
         );
    }
}
 
export default NumberComponent;