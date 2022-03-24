import React from 'react'
import axios from 'axios';
import Weather from './Weather.js';
import './App.css';
import Map from './Map'

class App extends React.Component {

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
  getLocation = async (e) => {
    try {
      let result = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_APIKEY}&q=${this.state.queryCity}&format=json`);
      console.log(result);
      this.setState({ locationObject: result.data[0], error: false }, this.getWeather);
    } catch (error) {
      console.error(error);
      console.log('there was an error');
      this.setState({ error: true })
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ queryCity: e.target.city.value }, this.getLocation);
  }

  render() {
    return (
      <div id="content-wrapper">
        <form id='form' onSubmit={this.handleSubmit}>
          <input type="text" placeholder="city name" name="city" />
          <button id='button' type="submit">Explore!</button>
        </form>
        <div>
          <div id="city-data">
            {this.state.locationObject.display_name ?
            
                <Map
                  locationObject={this.state.locationObject} />
              
              :
              <p>Search for a city to explore</p>}
            {this.state.weather.length > 0 && <Weather weather={this.state.weather} />}
          </div>
          <div id="image-wrapper">
          </div>

          {this.state.error && <p>There was an error with your request</p>}
        </div>
      </div>
    )
  }




}




// getWeather = async () => {
//   let city = this.state.locationObject.display_name.split(',')[0];
//   let url = `${process.env.REACT_APP_APIKEY}/weather?city_name=${city}`;
//   try {
//     let results = await axios.get(url);
//     this.setState({ weather: results.data, error: false })
//   } catch (error) {
//     this.setState({ error: true })
//   }
// } 
export default App;