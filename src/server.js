

// this is constructor for query the cities
function Location(location, locationData) {
  this.search_query = location;
  this.formatted_query = locationData[0].display_name;
  this.latitude = locationData[0].lat;
  this.longitude = locationData[0].lon;
}

