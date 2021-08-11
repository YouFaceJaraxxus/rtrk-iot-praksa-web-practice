import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DefaultComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="defaultComponent">
                <link rel="stylesheet" href="DefaultComponentStyle.css"/>
                <h1 class="title" id="title1">Ljetna praksa 2021</h1>
                <h2 class="title" id="title2">Implementacija</h2>
                <h2 class="title" id="title2">IoT rješenja</h2>
            </div> 
         );
    }
}
 
export default DefaultComponent;