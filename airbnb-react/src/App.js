import React, {
  Component
} from 'react';

import GoogleMapReact from 'google-map-react';
import './App.css';
import Flat from './components/Flat'
import Marker from './components/Marker'

class App extends Component {



constructor(props){
  super(props);
  this.state = {
    flats: [],
    allFlats: [],
    selectedFlat: null,
    center: {lat: 48.8566, lng:2.3522},
    search: ''
  }
}

componentDidMount(){
  fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
    .then(res=>res.json())
    .then(data => {
      this.setState({
        flats: data,
        allFlats: data
      });
      //console.log(this.state.flats)
    })
    .catch(err=>console.log(err))
}

selectFlat= (flat) => {

  console.log(flat);
  this.setState({
    selectedFlat: flat,
    center: {
          lat: flat.lat,
          lng: flat.lng,
    }
  })
 }

 handleSearch = (e)=> {

  const searchList = 
  this.state.allFlats.filter(element =>
    element.name.toLowerCase().match(e.target.value.toLowerCase())
  )
  this.setState({
    search: e.target.value,
    flats: searchList

    // regex
    //flats: this.state.flats.filter((flat)=> new RegExp(e.target.value,"i").exec(flat.name))
  });
  console.log(searchList)
  //console.log(this.state.search);
 }




  render() {

 
    return ( 

      < div className = "App" >
        <div className="main">
          <div className="search">
            <input type="text" 
              placeholder="Search" 
              onChange={this.handleSearch}/>
          </div>
          <div className="flats">
          
            {
              this.state.flats.map((flat, index) =>

                 <Flat 
                 flat= {flat}  
                 key={index}
                 selectFlat={this.selectFlat}
                 />
              )
            }          
       
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
          center={this.state.center}
          zoom={11}
            > 
                 {
              this.state.flats.map((flat, index) =>

              <Marker
              lat={flat.lat}
              lng={flat.lng}
              text={flat.price}
              key={index}
              selected={flat === this.state.selectedFlat}/>
              )
            } 
      </GoogleMapReact>
        </div>
      

      </div>

    );
  }
}

export default App;
