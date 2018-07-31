import React, { Component } from 'react'

export default class Weather extends Component {

  componentWillMount(){
      //console.log(this.props);
  }
    render() {
        return (

           <div className="weather__info">
                    {
                       this.props.city && this.props.country 
                        ?  <div><p className="weather__key">Location : <span className="weather__value">{this.props.city}, {this.props.country}</span></p>
                            <p className="weather__key">Temperature : <span className="weather__value">{this.props.temperature}</span></p> 
                            <p className="weather__key"> Humidity  : <span className="weather__value">{this.props.humidity}</span></p> 
                            <p className="weather__key">Conditions : <span className="weather__value">{this.props.description}</span> </p>
                            </div>
                        :  <div className="weather__error">{this.props.error}</div>              
                    }
           </div>

            
        )
    }
}
