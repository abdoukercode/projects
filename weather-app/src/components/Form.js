import React, { Component } from 'react'

export default class Form extends Component {


    componentDidMount(){
        //console.log(this.props);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="City ..."/>
                    <input type="text" name="country" placeholder="Country ..."/>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}
