// data needs to get into this component bc it is a container

import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>    
                        <th>Temperature</th>    
                        <th>Pressure</th>    
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                </tbody> 
            </table> 
        )
    }
}

function mapStateToProps({ weather }) { // es6 syntax
    return { weather }; // using state.weather bc WeatherReducer was assigned 'weather' prop in combineReducers
}

export default connect(mapStateToProps)(WeatherList);

