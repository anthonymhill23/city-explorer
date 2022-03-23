import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
export default class Map extends Component {
  render() {
    return (

<Card style={{ width: '18rem' }}>
  
  <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_APIKEY}&center=${this.props.locationObject.lat},${this.props.locationObject.lon}&zoom=12`} />
  <Card.Body>
    <Card.Title>{this.props.locationObject.display_name}</Card.Title>
    <Card.Text> latitude{this.props.locationObject.lat}
                longitude{this.props.locationObject.lon}
    
    </Card.Text>
    
  </Card.Body>
</Card>
  
    )
  }
}