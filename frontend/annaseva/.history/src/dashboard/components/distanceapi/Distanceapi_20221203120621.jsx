import React from 'react'
import { GoogleComponent } from 'react-google-location' 
const API_KEY = API_KEY_FROM_GOOGLE  // how to get key - step are below

class Distanceapi extends Component {
    constructor(props) {
      super(props)
      this.state = {
        place: null,
      };
    }
   
    render() {
      return (
        <div >
           <GoogleComponen
           
            apiKey={API_KEY}
            language={'en'}
            country={'country:in|country:us'}
            coordinates={true}
            locationBoxStyle={'custom-style'}
            locationListStyle={'custom-style-list'}
            onChange={(e) => { this.setState({ place: e }) }} />
        </div>
   
      )
    } 
  }

  export default dis

