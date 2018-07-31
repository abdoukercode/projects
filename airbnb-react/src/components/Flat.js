
import React, { Component } from 'react'
import './flat.css'

export default class Flat extends Component {
handleClick = ()=> {
    this.props.selectFlat(this.props.flat)
};
    render() {
    
    const style = {
        backgroundImage: `url(${this.props.flat.imageUrl})`
    }
        return (


            <div className="flat" onClick={this.handleClick}>
       
                <div className="flat-picture" style={style}></div>
                <div className="flat-title">{this.props.flat.priceCurrency} {this.props.flat.price}  -  {this.props.flat.name}</div>
            </div>
        )
    }
}
