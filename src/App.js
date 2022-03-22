import React, { Component } from 'react'
import axios from 'axios';
import Weather from './Weather.js';
import './App.css';
import Map from './Map'
export default class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    queryCity: '',
    locationObject: {},
    imageURL: '',
    error: false,
    weather: []
  }
}
getLocation = async() => {
  try {
    let result = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.pk.e2fd6814fb09c9f71384ce4ee890ca0c=${this.state.queryCity}&format=json`);
      // console.log(result);
      this.setState({ locationObject: result.data[0], error: false}, this.getWeather);
  } catch (error) {
    console.error(error);
    console.log('there was an error');
    this.setState({ error: true })
  }
}
getWeather = async() => {
  let city = this.state.locationObject.display_name.split(',')[0];
  let url = `${process.env.REACT_APP_URL}/weather?city_name=${city}`;
  try {
    let results = await axios.get(url);
  this.setState({weather: results.data, error: false})
  } catch(error) {
    this.setState({ error: true })
  }
}handleSubmit = (e) => {
  e.preventDefault();
  this.setState({ queryCity: e.target.city.value }, this.getLocation);
}

  render() {
    return(
      <div id="content-wrapper">
        <form id='form' onSubmit={this.handleSubmit}>
          <input type="text" placeholder="city name" name="city" />
          <button id='button' type="submit">Explore!</button>
        </form>
        <div>
        <div id="city-data">
          {this.state.locationObject.display_name ?
          <>
            <p>{this.state.locationObject.display_name}</p>
            <Map locationObject={this.state.locationObject}/>
          </>
           :
           <p>Search for a city to explore</p>}
          {this.state.weather.length > 0 && <Weather weather={this.state.weather}/>}
        </div>
        <div id="image-wrapper">
        </div>
        
        {this.state.error && <p>There was an error with your request</p>}
        </div>
      </div>
    )
  }
}