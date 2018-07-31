import React, { Component } from 'react';

import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

import './App.css';

const API_KEY= "5593d34e7c9e1ae4fd3e77304398a0e4";

class App extends Component {

    state = {
        temperature: undefined,
        city:undefined,
        country: undefined,
        humidity:undefined,
        description: undefined,
        error:undefined
    }

getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

 const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);           ;
 const data = await api_call.json();

if ( city && country ){
    this.setState({
        temperature: data.main.temp,
        city:data.name,
        country: data.sys.country,
        humidity:data.main.humidity,
        description: data.weather[0].description,
        error:""
    
    })}else{
   
            this.setState({temperature: undefined,
            city:undefined,
            country: undefined,
            humidity:undefined,
            description: undefined,
            error:"please enter correct location details"})
    }
    
}



//console.log(data);

/* componentDidMount(){
    this.getWeather();
    
} */
  render() {
    return (

        <div className="wrapper">
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 title-container">
                            <Titles />
                        </div>
                        <div className="col-md-7 form-container">
                            <Form getWeather= {this.getWeather}/>
                            <Weather {...this.state}/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
  }
}

export default App;
