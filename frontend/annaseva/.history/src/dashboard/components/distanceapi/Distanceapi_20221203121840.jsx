import React from 'react'
import { GoogleComponent } from 'react-google-location' 
const API_KEY = "AIzaSyCey35vzCiizl2kZewcpXUInSWZ67Azwxs"  // how to get key - step are below

class Distanceapi extends Component {
    constructor(props) {
      super(props)
      this.state = {
        place: null,
      };
    }
   
    render() {

        console.
      return (
        
        
        <>
           <GoogleComponent
            apiKey={API_KEY}
            language={'en'}
            country={'country:in|country:us'}
            coordinates={true}
            locationBoxStyle={'custom-style'}
            locationListStyle={'custom-style-list'}
            onChange={(e) => { this.setState({ place: e }) }} />
        </>
   
      )
    } 
  }

  export default Distanceapi

